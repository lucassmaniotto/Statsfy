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
    background: linear-gradient(90deg, #1f1f1f, #2d2d2d);
    padding: 50px 35px;
    border-radius: 15px;
    display: grid;
    flex-direction: column;
`;

export const ProfileImage = styled.img`
  width: 128px;
  height: 128px;
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
  justify-self: flex-end;
  cursor: pointer;

  &:hover {
    background-color: ${green};
    color: ${white};
  }
`;

export const HeaderCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  .title {
    font-weight: 600;
    font-size: 3rem;
    margin-bottom: 0px;
  }

  .info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }
`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  margin: 20px;

  
`;