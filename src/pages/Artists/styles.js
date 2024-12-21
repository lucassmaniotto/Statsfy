import styled from "styled-components";
import { Link } from "react-router-dom";

const ArtistsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
  margin: 40px 0px;
  justify-items: center;
  align-items: center;
  text-align: left;
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 15px 0;
    object-fit: cover;
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
  }

  @media (max-width: 630px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ArtistsCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #1f1f1f, #2d2d2d);
  border-radius: 15px;
  max-width: 270px;

  h3 {
    margin: 10px 0;
    font-size: 1.3rem;
    font-weight: 600;
    color: #fff;
    white-space: pre-wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 50px;
    width: 260px;
    text-align: center;
  }

  &:hover {
    transform: scale(1.05);
    transition: all 0.25s ease-in-out;
    cursor: pointer;
  }
`;

const ArtistsInfo = styled.div`
  margin: 0 10px 35px 10px;
  font-family: "CircularStdLight" !important;
  font-size: 1.1rem;
  width: 250px;
  padding: 10px;
  box-sizing: border-box;

  p {
    margin: 0;
    align-self: flex-start;
    padding: 0 10px 0 0;
  }

  .genres {
    white-space: pre-wrap;
    text-align: start;
    padding: 0;
    width: 100%;
    height: 70px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0px;
  gap: 20px;
`;

export { ArtistsContainer, ArtistsCard, ArtistsInfo, ButtonContainer };
