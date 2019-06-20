import styled from 'styled-components';

export const Button = styled.button.attrs(() => ({ type: 'button' }))`
  color: white;
  font-weight: bold;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  font-family: ${props => props.theme.fonts.main};
  position: relative;
  z-index: 1;
  overflow: hidden;
  max-height: 36px;
  transition: box-shadow 0.4s;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    background: linear-gradient(
      to bottom right,
      ${props => props.theme.colours.berry},
      ${props => props.theme.colours.indigo},
      ${props => props.theme.colours.berry}
    );
    transition: transform 0.4s;
    z-index: -1;
  }
  &:hover::before {
    transform: translateY(-50%);
  }
  &:hover {
    box-shadow: 0px 0px 8px rgba(0,0,0,0.3);
  }
`;

export const MutedButton = styled(Button)`
  color: black;
  &::before {
    background: white;
  }
`;

export const DestructiveButton = styled(Button)`
  &::before {
    background: red;
  }
`;

export default Button;
