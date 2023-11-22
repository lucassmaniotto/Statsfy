import { Link } from "react-router-dom";
import styled from "styled-components";
import { green } from "../GlobalStyles/UI/variables";

const StyledLink = styled(Link)`
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    color: ${green};
  }
`;

export const NavLink = ({ to, target = "_self", children }) => {
  return (
    <StyledLink to={to} target={target}>
      {children}
    </StyledLink>
  );
};
