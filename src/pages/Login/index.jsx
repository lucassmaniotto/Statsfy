import { loginEndpoint } from "../../services/spotify/login.js";

import { Footer } from "../../components/Footer";

import { About, Container, Image, LoginButton, Logo, Title } from "./styles.js";

export const Login = () => {
  return (
    <Container>
      <Logo>
        <Image src="/spotify.png" alt="Statsfy" />
        <Title>Statsfy</Title>
      </Logo>
      <About>
        <h2 className="subtitle">
          Statsfy is a web app that uses Spotify API to show you everything
          about your Spotify account
        </h2>
        <div className="features">
          <p className="feature">Get insights about your Spotify account</p>
          <p className="feature">
            View your top artists and tracks, recently played tracks and more
          </p>
          <p className="feature">
            All of it in a beautiful and intuitive interface, while listening to
            your favorite music!
          </p>
        </div>
      </About>
      <LoginButton href={loginEndpoint}>Login with Spotify</LoginButton>
      <Footer />
    </Container>
  );
};
