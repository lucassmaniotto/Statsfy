import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50vh;
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
