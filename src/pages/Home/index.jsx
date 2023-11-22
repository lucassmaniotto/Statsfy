import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Home = () => {
  return (
    <Container>
      <h1>Welcome to Statsfy</h1>
    </Container>
  );
};
