import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SidebarBox = styled.div`
  display: block;
  padding-top: 10px;
  padding-left: 20px;
  width: 100%;
  max-width: 380px;
`;

export const Logo = styled.a`
  color: #111;
  font-size: 25px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: -3.2px;
  text-transform: uppercase;

  cursor: pointer;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    font-size: 45px;
  }
`;

export const NavList = styled.nav`
  display: none;

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  }
`;

export const NavListLink = styled(NavLink)`
  position: relative;
  display: inline-block;
  color: #111;
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
  text-transform: uppercase;
  text-decoration: none;

  &:not(:first-child) {
    margin-top: 10px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 240px;
    height: 2px;
    background-color: #000;
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
  color: #000;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 300;
  display: inline-block;
  position: relative;
  padding-bottom: 5px;
  margin-bottom: 10px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 240px;
    height: 1px;
    background-color: #111;
  }
`;

export const ContactListLink = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 300;
`;
