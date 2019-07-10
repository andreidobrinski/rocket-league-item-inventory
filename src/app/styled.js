import styled from 'styled-components';

export const Button = styled.button.attrs(() => ({ type: 'button' }))`
  color: white;
  font-weight: bold;
  border: none;
  padding: 8px 16px;
  font-size: ${props => props.theme.ratio.one}rem;
  border-radius: 6px;
  cursor: pointer;
  font-family: ${props => props.theme.fonts.main};
  position: relative;
  z-index: 1;
  overflow: hidden;
  max-height: 39px;
  transition: box-shadow 0.4s;
  &::before {
    content: '';
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
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
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

export const AppWrap = styled.div`
  min-height: 100vh;
  height: 100%;
  position: relative;
  background: rgba(255, 255, 255, 0.5);
  background-clip: padding-box;
  border: solid 8px transparent;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -8px;
    background: linear-gradient(
      to right,
      ${props => props.theme.colours.berry},
      ${props => props.theme.colours.indigo}
    );
  }

  h2 {
    margin-bottom: 0;
    font-family: ${props => props.theme.fonts.main};
    font-size: ${props => props.theme.ratio.two}rem;
  }

  p {
    font-size: ${props => props.theme.ratio.one}rem;
    font-family: ${props => props.theme.fonts.main};
    line-height: ${props => props.theme.ratio.one};
  }
`;

export const Form = styled.form`
  form,
  label {
    display: flex;
    flex-direction: column;
    font-size: ${props => props.theme.ratio.one}rem;
  }
  label {
    margin-bottom: 4px;
  }
  input {
    border: none;
    border-radius: 4px;
    padding: 6px;
    font-family: ${props => props.theme.fonts.main};
    font-size: ${props => props.theme.ratio.one}rem;
  }
  select {
    padding: 6px;
    font-family: ${props => props.theme.fonts.main};
    font-size: ${props => props.theme.ratio.one}rem;
  }
`;
