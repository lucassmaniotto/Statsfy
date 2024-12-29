import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  width: 95%;
  margin: 0 auto;

  h2 {
    font-size: 2rem;
    margin: 5rem 0 0 1rem;
    text-align: left;
    align-self: flex-start;
  }

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