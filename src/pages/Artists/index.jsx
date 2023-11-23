import { useEffect, useState } from "react";
import apiClient from "../../services/spotify/login";
import { Button } from "../../components/Button";

import styled from "styled-components";

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
  margin: 40px 0px;
  justify-items: center;
  align-items: center;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 10px;
    object-fit: cover;
  }

  h1 {
    margin-bottom: 10px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0px;
  gap: 20px;
`;

export const Artists = () => {
  const [artists, setArtists] = useState([]);
  const [after, setAfter] = useState(null);
  const [previousPages, setPreviousPages] = useState([]);

  const fetchArtists = (afterParam) => {
    const limit = 18;
    apiClient
      .get(`/me/following?type=artist&limit=${limit}${afterParam ? `&after=${afterParam}` : ""}`)
      .then((response) => {
        setPreviousPages((prevPages) => [...prevPages, artists.slice()]);
        setArtists(response.data.artists.items);
        setAfter(response.data.artists.cursors.after);
      });
  };

  useEffect(() => {
    fetchArtists();
  }, []);

  const handleNextPage = () => {
    fetchArtists(after);
  };

  const handlePreviousPage = () => {
    const previousPage = previousPages.pop();
    if (previousPage) {
      setArtists(previousPage);
    }
  };

  return (
    <div>
      <Container>
        {artists.map((artist) => (
          <div key={artist.id}>
            <a href={artist.external_urls.spotify} target="_blank" rel="noreferrer">
              <img src={artist.images[1].url} alt={artist.name} />
              <h3>{artist.name}</h3>
            </a>
          </div>
        ))}
      </Container>
      <ButtonContainer>
        <Button onClick={handlePreviousPage}>Previous Page</Button>
        <Button onClick={handleNextPage}>Next Page</Button>
      </ButtonContainer>
    </div>
  );
};
