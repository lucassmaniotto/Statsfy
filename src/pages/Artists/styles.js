import styled from "styled-components";

const ArtistsContainer = styled.section`
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

const ArtistsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 35px;
  font-family: "CircularStdLight" !important;
  font-size: 1.1rem;

  p {
    margin: 0;
    align-self: flex-start;
    padding: 0 10px 0 0;
  }
`;

export { ArtistsContainer, ButtonContainer, ArtistsInfo };
