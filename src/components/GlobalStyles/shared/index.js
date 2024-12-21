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

export { Section };