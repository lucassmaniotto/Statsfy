import styled from "styled-components";
import { black, green, white } from "../GlobalStyles/UI/variables";

const StyledFooter = styled.footer`
  position: relative;
  bottom: 0px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 25px 0px;
  margin-top: 50px;
  background-color: ${black};

  p {
    color: ${white};
    font-weight: 600;
  }

  a {
    color: ${white};
    font-weight: 600;
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      color: ${green};
    }
  }

  @media (max-width: 768px) {
    padding: 5px 0px;
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <p>
        Made with <span>💚</span> by{" "}
        <a
          href="https://github.com/lucassmaniotto"
          target="_blank"
          rel="noreferrer"
        >
          Lucas Smaniotto
        </a>
      </p>
    </StyledFooter>
  );
};
