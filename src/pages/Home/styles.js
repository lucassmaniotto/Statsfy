import styled from "styled-components";
import {
  black,
  green,
  white,
} from "../../components/GlobalStyles/UI/variables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title {
        font-size: 3rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: 20px;
    }

    @media (max-width: 768px) {
        .title {
            font-size: 2rem;
        }
    }
`;

export const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

export const ButtonLogout = styled.button`
  width: 200px;
  margin-top: 20px;
  padding: 15px 0px;
  text-align: center;
  background-color: ${white};
  border-radius: 50px;
  color: ${black};
  font-weight: 600;
  text-decoration: none;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${green};
    color: ${white};
  }
`;