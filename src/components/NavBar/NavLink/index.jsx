import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { green } from "../../GlobalStyles/UI/variables";

const StyledLink = styled(Link)`
  font-weight: 600;
  transition: 0.2s;
  margin-left: 10px;
  color: ${(props) => (props.isActive ? green : "inherit")};

  &:hover {
    color: ${green};
  }
`;

export const NavLink = ({ to, target = "_self", children }) => {
  const location = useLocation();

  return (
    <StyledLink to={to} target={target} isActive={to === location.pathname}>
      {children}
    </StyledLink>
  );
};
