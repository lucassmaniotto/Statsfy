import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50vh;

  @media (max-width: 830px) {
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;
  }
`;

export const Content = styled.div`
  background: linear-gradient(90deg, #1f1f1f, #2d2d2d);
  padding: 50px 35px 10px;
  border-radius: 15px;
  display: grid;
  flex-direction: column;

  .nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 20px;
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
      padding: 10px;
      margin-top: 10px;
      width: 30%;
    }
  }
`;

export const ProfileImage = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  margin-bottom: 20px;

  @media (max-width: 830px) {
    width: 64px;
    height: 64px;
    margin: 20px;
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

  @media (max-width: 830px) {
    justify-content: flex-start;
    gap: 0px;

    .title {
      font-size: 1.5rem;
    }

    .info {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 425px) {
    .title {
      font-size: 1.2rem;
    }
  }
`;
