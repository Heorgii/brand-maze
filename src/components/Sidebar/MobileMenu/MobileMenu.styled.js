import { styled } from 'styled-components';
import { NavListLink } from '../Sidebar.styled';

export const MobileMenuBox = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  transform: translateX(100%);
  transition: transform 250ms ease-in-out;
  display: flex;
  flex-direction: column;
  background-color: white;

  &.is-expanded {
    transform: translateX(0);
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const HeaderSvgMobile = styled.svg`
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 20px;
`;

export const MobileBox = styled.nav`
  padding: 20px;
`;

export const NavListMobile = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const NavListMobileItem = styled(NavListLink)`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const ContactListMobile = styled.ul`
  display: block;
  position: fixed;
  bottom: 30px;

  padding: 0;
  list-style: none;
`;

export const ContactListTel = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
