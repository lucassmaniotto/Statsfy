import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  @media (max-width: 830px) {
    padding: 0;
    border-radius: 0;
    width: 100%;
    padding: 0px;
    font-size: 0.8rem;

    .nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
      padding-bottom: 20px;
    }

    button {
      padding: 15px;
      margin-top: 10px;
      width: 150px;
    }
  }
`;

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

const ArtistsCard = styled.a`
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

export { Section, ArtistsContainer, ArtistsCard, ArtistsInfo, ButtonContainer };
