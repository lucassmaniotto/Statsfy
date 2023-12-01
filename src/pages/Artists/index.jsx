import { useEffect, useState } from "react";
import apiClient from "../../services/spotify/login";
import { Button } from "../../components/Button";
import {
  ArtistsContainer,
  ArtistsInfo,
  ButtonContainer,
  Section,
} from "./styles";

export const Artists = () => {
  const [artists, setArtists] = useState([]);
  const [after, setAfter] = useState(null);
  const [before, setBefore] = useState(null);
  const [limit, setLimit] = useState(18);

  const fetchArtists = (afterParam) => {
    apiClient
      .get(
        `/me/following?type=artist&limit=${limit}${
          afterParam ? `&after=${afterParam}` : ""
        }`
      )
      .then((response) => {
        setArtists(response.data.artists.items);
        setAfter(response.data.artists.cursors.after);
        setBefore(response.data.artists.cursors.before);
      });
  };

  useEffect(() => {
    fetchArtists();
    updateLimitBasedOnScreenWidth();
    window.addEventListener("resize", updateLimitBasedOnScreenWidth);

    return () => {
      window.removeEventListener("resize", updateLimitBasedOnScreenWidth);
    };
  }, [limit]);

  const updateLimitBasedOnScreenWidth = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth > 1250 && screenWidth <= 1810) {
      setLimit(20);
    } else {
      setLimit(18);
    }
  };

  const handleNextPage = () => {
    fetchArtists(after);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handlePreviousPage = () => {
    fetchArtists(before);
  };

  const formatFollowers = (followers) => {
    if (followers < 1000) {
      return `${followers} Followers`;
    } else if (followers < 1000000) {
      return `${(followers / 1000).toFixed(1)}K Followers`;
    } else {
      return `${(followers / 1000000).toFixed(1)}M Followers`;
    }
  };

  const formatGenres = (genres) => {
    if (genres.length === 1) {
      return genres[0];
    } else if (genres.length === 2) {
      return genres.join(" & ");
    } else if (genres.length > 2) {
      return genres.slice(0, 2).join(", ") + ` & ${genres.length - 2} more`;
    } else {
      return "non specified";
    }
  };

  return (
    <Section>
      <ArtistsContainer>
        {artists.map((artist) => (
          <div key={artist.id}>
            <a
              href={artist.external_urls.spotify}
              target="_blank"
              rel="noreferrer"
            >
              <img src={artist.images[1].url} alt={artist.name} />
              <h3>{artist.name}</h3>
            </a>
            <ArtistsInfo>
              <p className="genres">Genre: {formatGenres(artist.genres)}</p>
              <p>{formatFollowers(artist.followers.total)}</p>
              <p>{artist.popularity}% of popularity</p>
            </ArtistsInfo>
          </div>
        ))}
      </ArtistsContainer>
      <ButtonContainer>
        <Button onClick={handlePreviousPage}>Previous Page</Button>
        <Button onClick={handleNextPage}>Next Page</Button>
      </ButtonContainer>
    </Section>
  );
};
