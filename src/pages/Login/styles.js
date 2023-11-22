import styled from "styled-components";
import {
  white,
  green,
  black,
} from "../../components/GlobalStyles/UI/variables.js";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-direction: column;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  text-align: center;
  margin-left: 15px;

  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

export const Image = styled.img`
  width: 125px;
  filter: invert(100%);

  @media (max-width: 768px) {
    width: 100px;
  }

  @media (max-width: 480px) {
    width: 75px;
  }
`;

export const About = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .subtitle {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 50px;
  }

  .features {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 50px;
  }

  .feature {
    width: 25%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0px 50px;
  }

  .features::before {
    content: "";
    width: 1px;
    height: 100px;
    background-color: ${white};
    margin: 0px 50px;
  }

  .feature:hover {
    transform: scale(1.1);
    transition: 0.2s;
  }

  @media (max-width: 1600px) {
    width: 70%;
  }

  @media (max-width: 1280px) {
    width: 80%;
  }

  @media (max-width: 1050px) {
    width: 90%;

    .subtitle {
      font-size: 1.5rem;
    }

    .feature {
      width: 50%;
      margin: 0px 25px;
    }
  }

  @media (max-width: 768px) {
    width: 95%;

    .subtitle {
      width: 80%;
      font-size: 1rem;
    }

    .features {
      flex-direction: column;
    }

    .feature {
      width: 50%;
      margin: 15px 0px;
    }

    .features::before {
      display: none;
    }

    .feature::after {
      content: "";
      width: 100%;
      height: 1px;
      background-color: ${white};
      margin: 15px 0px;
    }
  }
`;

export const LoginButton = styled.a`
  width: 200px;
  padding: 15px 0px;
  text-align: center;
  background-color: ${white};
  border-radius: 50px;
  color: ${black};
  font-weight: 600;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    background-color: ${green};
    color: ${white};
  }
`;
