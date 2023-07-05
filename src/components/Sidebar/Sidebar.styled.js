import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SidebarBox = styled.div`
  margin-top: 10px;
  margin-left: 20px;
  width: 376px;
`;

export const Logo = styled.nav`
  color: #111;
  font-size: 45px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: -3.2px;
  text-transform: uppercase;
`;
export const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
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

  &:not(:first-child){
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
  padding: 0;
  list-style: none;
`;

export const ContactListItem = styled.li`
  color: #000;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 300;
`;
