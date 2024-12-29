import styled from "styled-components";
import { green } from "../../../components/GlobalStyles/UI/variables";

const ArtistContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 15px 0;
    object-fit: cover;
  }
`;

const ArtistInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0 0 10px;
  }

  p {
    width: 100%;
    font-size: 1.1rem;
    margin: 5px 0;
  }

  a {
    width: fit-content;
    margin-top: 10px;
    transition: 0.3s;
    border-bottom: ${(props) =>
      props.active ? `1px solid ${green}` : undefined};
    color: ${(props) => (props.active ? green : "inherit")};

    &:hover {
      color: ${green};
      border-bottom: 2px solid ${green};
    }
  }
`;

const Albums = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  margin-top: 20px;
  padding: 1rem 5rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      object-fit: cover;
    }
  }

  @media (max-width: 1810px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 1530px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1250px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 935px) {
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
  }

  @media (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
    width: 75%;
  }

  @media (max-width: 630px) {
    grid-template-columns: repeat(1, 1fr);
    width: 70%;
  }
`;

const AlbumInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 3rem;

  h3 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  p {
    font-size: 1.1rem;
    margin: 0;
    align-self: flex-start;
  }

  p:first-child {
    margin: 1rem 0;
    align-self: center;
  }
`;

export { ArtistContainer, ArtistInfo, Albums, AlbumInfo };
