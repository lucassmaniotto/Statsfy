import { useEffect, useState } from "react";
import { NavLink } from "../../components/NavLink";

import apiClient from "../../services/spotify/login";

import {
  ButtonLogout,
  Container,
  Content,
  ContentCard,
  HeaderCard,
  ProfileImage,
} from "./styles";

export const Home = () => {
  const [images, setImages] = useState();
  const [name, setName] = useState();
  const [profile, setProfile] = useState();
  const [followers, setFollowers] = useState();
  const [following, setFollowing] = useState();

  const handleLogout = () => {
    localStorage.removeItem("token");
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
        <ContentCard>
          <NavLink to={profile} target="_blank">
            Profile
          </NavLink>
          <NavLink to="/status">Stats</NavLink>
          <NavLink to="/playlists">Playlists</NavLink>
          <NavLink to="/artists">Artists</NavLink>
        </ContentCard>
        <ButtonLogout onClick={() => handleLogout()}>Logout</ButtonLogout>
      </Content>
    </Container>
  );
};