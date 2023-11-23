import styled from 'styled-components';
import { black, green, white } from '../GlobalStyles/UI/variables';

const StyledButton = styled.button`
  width: 200px;
  margin-top: 20px;
  padding: 15px 0px;
  text-align: center;
  background-color: ${white};
  border-radius: 50px;
  color: ${black};
  font-weight: 600;
  text-decoration: none;
  transition: 0.2s;
  justify-self: ${(props) => props.$justifySelf || 'auto'}; /* Use 'auto' como valor padrão ou qualquer valor padrão desejado */
  cursor: pointer;

  &:hover {
    background-color: ${green};
    color: ${white};
  }
`;

export const Button = ({ children, onClick, $justifySelf }) => {
  return (
    <StyledButton $justifySelf={$justifySelf} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
