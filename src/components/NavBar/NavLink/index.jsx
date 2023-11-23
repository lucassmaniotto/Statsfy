import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { green } from "../../GlobalStyles/UI/variables";

const StyledLink = styled(Link)`
  font-weight: 600;
  transition: 0.3s;
  margin-left: 10px;
  border-bottom: ${(props) => (props.active ? `1px solid ${green}` : undefined)};
  color: ${(props) => (props.active ? green : "inherit")};

  &:hover {
    color: ${green};
    border-bottom: 2px solid ${green};
  }
`;

export const NavLink = ({ to, target = "_self", children }) => {
  const location = useLocation();

  return (
    <StyledLink to={to} target={target} active={to === location.pathname ? 1 : 0}>
      {children}
    </StyledLink>
  );
};
