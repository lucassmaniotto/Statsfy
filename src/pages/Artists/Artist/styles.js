import styled from "styled-components";
import { green } from "../../../components/GlobalStyles/UI/variables";

const ArtistContainer = styled.div`
  display: flex;
  flex-direction: row;

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
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      object-fit: cover;
    }

    p {
      font-size: 1.1rem;
      margin: 10px 0;
    }
  }
`;

export { ArtistContainer, ArtistInfo, Albums };
