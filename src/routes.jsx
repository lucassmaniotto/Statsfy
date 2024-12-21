import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Artists } from "./pages/Artists";
import { Artist } from "./pages/Artists/Artist";
import { Stats } from "./pages/Stats";
import { Playlists } from "./pages/Playlists";

import { setClientToken } from "./services/spotify/login";

export default function AppRouter() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const getTokenFromLocalStorage = () => {
      const storedToken = window.localStorage.getItem("token");
      const hash = window.location.hash;
      window.location.hash = "";
      if (!storedToken && hash) {
        const _token = hash.split("&")[0].split("=")[1];
        const expiresIn = hash.split("&")[2].split("=")[1];
        const expirationTime = Date.now() + expiresIn * 1000;
        window.localStorage.setItem("token", _token);
        window.localStorage.setItem("tokenExpiration", expirationTime);
        setToken(_token);
        setClientToken(_token);
      } else {
        setToken(storedToken);
        setClientToken(storedToken);
      }
    };

    const checkTokenExpiration = () => {
      const expirationTime = window.localStorage.getItem("tokenExpiration");
      if (expirationTime && Date.now() > parseInt(expirationTime)) {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("tokenExpiration");
        setToken("");
      }
    };

    getTokenFromLocalStorage();
    checkTokenExpiration();
  }, []);

  return !token ? (
    <Login />
  ) : (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Stats />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/artists/:artistId" element={<Artist />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
