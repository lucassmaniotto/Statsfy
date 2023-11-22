import { useEffect, useState } from "react";
import apiClient from "../../services/spotify/login";
import { ButtonLogout, Container, Content, ProfileImage } from "./styles";

export const Home = () => {
  const [images, setImages] = useState();
  const [name, setName] = useState();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  useEffect(() => {
    apiClient.get("/me").then((response) => {
      setImages(response.data.images[1].url);
      setName(response.data.display_name);
      console.log(response.data);
    });
  }, []);

  return (
    <Container>
      <Content>
        {images && <ProfileImage src={images} alt="Profile" />}
        <h1 className="title">Welcome to Statsfy {name}!</h1>
      </Content>
      <ButtonLogout onClick={() => handleLogout()}>Logout</ButtonLogout>
    </Container>
  );
};
