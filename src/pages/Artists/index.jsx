import { useEffect, useState } from "react";
import apiClient from "../../services/spotify/login";
import { Button } from "../../components/Button";

import {
  ArtistsCard,
  ArtistsContainer,
  ArtistsInfo,
  ButtonContainer,
} from "./styles";

import { Section } from "../../components/GlobalStyles/shared";
import { formatFollowers } from "../../components/util/formatFollowers";
import { formatGenres } from "../../components/util/formatGenres";

export const Artists = () => {
  const [artists, setArtists] = useState([]);
  const [after, setAfter] = useState(null);
  const [limit, setLimit] = useState(18);
  const [pageHistory, setPageHistory] = useState([]);
  const [currentPageIndex, setCurrentPageIndex] = useState(-1);

  const fetchArtists = (afterParam = null) => {
    apiClient
      .get(
        `/me/following?type=artist&limit=${limit}${
          afterParam ? `&after=${afterParam}` : ""
        }`
      )
      .then((response) => {
        setArtists(response.data.artists.items);
        setAfter(response.data.artists.cursors?.after || null);

        if (afterParam !== null || currentPageIndex === -1) {
          setPageHistory((prevHistory) => [
            ...prevHistory.slice(0, currentPageIndex + 1),
            {
              artists: response.data.artists.items,
              after: response.data.artists.cursors?.after || null,
            },
          ]);
          setCurrentPageIndex((prevIndex) => prevIndex + 1);
        }
      });
  };

  const updateLimitBasedOnScreenWidth = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth > 1250 && screenWidth <= 1810) {
      setLimit(20);
    } else {
      setLimit(18);
    }
  };

  useEffect(() => {
    fetchArtists();
    updateLimitBasedOnScreenWidth();
    window.addEventListener("resize", updateLimitBasedOnScreenWidth);

    return () => {
      window.removeEventListener("resize", updateLimitBasedOnScreenWidth);
    };
  }, [limit]);

  const handleNextPage = () => {
    fetchArtists(after);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handlePreviousPage = () => {
    if (currentPageIndex > 0) {
      const previousPage = pageHistory[currentPageIndex - 1];
      if (currentPageIndex - 1 === 0) {
        fetchArtists(null);
      } else {
        setArtists(previousPage.artists);
        setAfter(previousPage.after);
      }
      setCurrentPageIndex((prevIndex) => prevIndex - 1);
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Section>
      <ArtistsContainer>
        {artists.map((artist) => (
          <ArtistsCard key={artist.id} to={`/artists/${artist.id}`}>
            <img src={artist.images[1].url} alt={artist.name} />
            <h3>{artist.name}</h3>
            <ArtistsInfo>
              <p className="genres">Genre: {formatGenres(artist.genres)}</p>
              <p>{formatFollowers(artist.followers.total)}</p>
              <p>{artist.popularity}% of popularity</p>
            </ArtistsInfo>
          </ArtistsCard>
        ))}
      </ArtistsContainer>
      <ButtonContainer>
        <Button onClick={handlePreviousPage} disabled={currentPageIndex <= 0}>
          Previous Page
        </Button>
        <Button onClick={handleNextPage}>Next Page</Button>
      </ButtonContainer>
    </Section>
  );
};
