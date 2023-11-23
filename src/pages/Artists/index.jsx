import { useEffect, useState } from "react";
import apiClient from "../../services/spotify/login";
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

export const Artists = () => {
  const [artists, setArtists] = useState([]);  

  useEffect(() => {
    apiClient.get("/me/following?type=artist&limit=18").then((response) => {
      setArtists(response.data.artists.items);
    });
  }, []);

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
    </div>
  );
};
