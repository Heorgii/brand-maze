import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SidebarContainer = styled.div`
  /* display: flex;
  flex-direction: column; */
  @media screen and (min-width: 1280px) {
    margin-top: 10px;
    margin-left: 20px;
  }
`;

export const SidebarBox = styled.div`
  width: 320px;

  @media screen and (max-width: 1280px) {
    display: none;
  }
`;

export const Header = styled.header`
  color: ${props => props.theme.black};

  @media screen and (max-width: 1280px) {
    display: flex;
  }
`;

export const HeaderSvg = styled.svg`
  fill: currentColor;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;

  /* @media screen and (max-width: 1280px) {
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
  } */

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const Logo = styled.p`
  color: ${props => props.theme.black};
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  text-transform: uppercase;
  text-decoration: none;

  position: absolute;
  font-size: 25px;
  letter-spacing: -1.2px;

  cursor: pointer;
  text-decoration: none;

  position: fixed;
  margin-top: 10px;
  margin-left: 20px;

  @media screen and (min-width: 1280px)  {
    position: absolute;
    font-size: 45px;
    letter-spacing: -3.2px;
  }

  /* @media screen and (max-width: 767px) {
    position: absolute;
    font-size: 25px;
    letter-spacing: -1.2px;
  } */
`;

export const LogoBox = styled.a`
  text-decoration: none;
`;

export const NavList = styled.nav`
  display: none;

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;

    position: fixed;
    margin-top: 100px;
    margin-left: 20px;
  }
`;

export const NavListLink = styled(NavLink)`
  position: relative;
  display: inline-block;
  color: ${props => props.theme.black};
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
  text-transform: uppercase;
  text-decoration: none;

  @media screen and (max-width: 1280px) {
    font-size: 25px;
  }

  &:not(:first-child) {
    margin-top: 10px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 240px;
    height: 1px;
    background-color: ${props => props.theme.black};
    transform: scaleX(0);
    transition: transform 0.2s ease-in-out;
    transform-origin: left center;
  }

  &:hover::after,
  &:focus::after,
  &.active::after {
    transform: scaleX(1);
  }
`;

export const ContactList = styled.ul`
  display: none;

  @media screen and (min-width: 1280px) {
    display: block;
    position: fixed;
    bottom: 30px;

    padding: 0;
    list-style: none;
  }
`;

export const ContactListItem = styled.li`
  color: ${props => props.theme.black};
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 300;
  display: inline-block;
  position: relative;
  padding-bottom: 15px;
  margin-bottom: 20px;
  margin-top: 10px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 240px;
    height: 1px;
    background-color: ${props => props.theme.black};
  }
`;

export const ContactListLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.black};
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 300;

  @media screen and (max-width: 1280px) {
    font-size: 20px;
  }

  &:hover,
  &:focus {
    background: linear-gradient(
      to left,
      rgba(65, 45, 183, 1),
      rgba(219, 47, 47, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }
`;

export const SocialsList = styled.ul`
  display: flex;
`;

export const SocialsListItem = styled.li`
  cursor: pointer;
  padding: 2px;
  color: ${props => props.theme.black};

  &:not(:last-child) {
    margin-right: 20px;
  }
  & > *:hover,
  & > *:focus {
    fill: ${props => props.theme.accentRed};
  }

  & svg {
    fill: currentColor;
  }
`;
