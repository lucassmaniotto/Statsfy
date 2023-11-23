import { useEffect, useState } from "react";
import apiClient from "../../services/spotify/login";
import { Button } from "../../components/Button";
import { ArtistsContainer, ArtistsInfo, ButtonContainer } from "./styles";

export const Artists = () => {
  const [artists, setArtists] = useState([]);
  const [after, setAfter] = useState(null);
  const [before, setBefore] = useState(null);

  const fetchArtists = (afterParam) => {
    const limit = 18;
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
  }, []);

  const handleNextPage = () => {
    fetchArtists(after);
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

  return (
    <div>
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
                <p>Genre: {artist.genres[0] || "non specified"}</p>
                <p>{formatFollowers(artist.followers.total)}</p>
                <p>{artist.popularity}% of popularity</p>
              </ArtistsInfo>
          </div>
        ))}
      </ArtistsContainer>
      <ButtonContainer>
        <Button onClick={handlePreviousPage}>
          Initial Page
        </Button>
        <Button onClick={handleNextPage}>Next Page</Button>
      </ButtonContainer>
    </div>
  );
};
