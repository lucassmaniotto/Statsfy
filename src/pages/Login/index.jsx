import { loginEndpoint } from "../../services/spotify/login.js";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Login = () => {
  return (
    <Container>
      <h1>Statsfy</h1>
      <a href={loginEndpoint}>Login with Spotify</a>
    </Container>
  );
};
