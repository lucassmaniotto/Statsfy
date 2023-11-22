import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { setClientToken } from "./services/spotify/login";

export default function AppRouter() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);
  
  return !token ? (
    <Login />
  ) : (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
