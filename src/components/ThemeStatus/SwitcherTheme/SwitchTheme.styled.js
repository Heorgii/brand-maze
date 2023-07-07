import styled from 'styled-components';

const BtnChangeTheme = styled.button`
  color: ${props => props.theme.black};
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  & svg {
    fill: currentColor;
  }
`;

const SwitcherWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 21px;
  right: 55px;
  height: auto;

  background-color: transparent;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    right: 55px;
  }

  @media screen and (min-width: 1280px) {
    top: 30px;
    right: 55px;
  }
`;

export { BtnChangeTheme, SwitcherWrapper };
