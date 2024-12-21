import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import apiClient from "../../services/spotify/login";
import { Container, Content, HeaderCard, ProfileImage } from "./styles";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

export const Home = () => {
  const [images, setImages] = useState();
  const [name, setName] = useState();
  const [profile, setProfile] = useState();
  const [followers, setFollowers] = useState();
  const [following, setFollowing] = useState();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiration");
    window.location.reload();
  };

  useEffect(() => {
    apiClient.get("/me").then((response) => {
      setImages(response.data.images[0].url);
      setName(response.data.display_name);
      setProfile(response.data.external_urls.spotify);
      setFollowers(response.data.followers.total);
    });
  }, []);

  useEffect(() => {
    apiClient.get("/me/following?type=artist").then((response) => {
      setFollowing(response.data.artists.total);
    });
  }, []);

  return (
    <>
      <Container>
        <Content>
          <HeaderCard>
            {images && <ProfileImage src={images} alt="Profile" />}
            <div>
              <h1 className="title">Welcome, {name}!</h1>
              <div className="info">
                <p>Followers: {followers}</p>
                <p>Following: {following}</p>
              </div>
            </div>
          </HeaderCard>
          <div className="nav">
            <NavBar profile={profile} />
            <Button onClick={() => handleLogout()} $justifySelf="flex-end">
              Logout
            </Button>
          </div>
        </Content>
      </Container>
      <Outlet />
      <Footer />
    </>
  );
};
