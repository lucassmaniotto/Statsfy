import styled from "styled-components";
import { NavLink } from "./NavLink";

const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
`;

export const NavBar = ({ profile }) => {
  return (
    <Nav>
      <NavLink to={profile} target="_blank">
        Profile
      </NavLink>
      <NavLink to="/">Stats</NavLink>
      <NavLink to="/playlists">Playlists</NavLink>
      <NavLink to="/artists">Followed Artists</NavLink>
    </Nav>
  );
};
