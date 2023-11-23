
import styled from "styled-components";
import { green } from "../GlobalStyles/UI/variables";
import { NavLink } from "./NavLink";

const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
`;

const activeStyle = {
  color: green,
};

export const NavBar = ({ profile, activeLink }) => {
  return (
    <Nav>
      <NavLink
        to={profile}
        target="_blank"
        activeStyle={activeLink === profile ? activeStyle : {}}
      >
        Profile
      </NavLink>
      <NavLink
        to="/"
        activeClassName="active"
        exact
        activeStyle={activeLink === "/" ? activeStyle : {}}
      >
        Stats
      </NavLink>
      <NavLink
        to="/playlists"
        activeClassName="active"
        activeStyle={activeLink === "/playlists" ? activeStyle : {}}
      >
        Playlists
      </NavLink>
      <NavLink
        to="/artists"
        activeClassName="active"
        activeStyle={activeLink === "/artists" ? activeStyle : {}}
      >
        Artists
      </NavLink>
    </Nav>
  );
};
