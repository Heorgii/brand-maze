import { useLocation } from 'react-router-dom';
import {
  ContactList,
  ContactListItem,
  ContactListLink,
  Logo,
  NavList,
  NavListLink,
  SidebarBox,
  SocialsList,
  SocialsListItem,
  SidebarContainer,
  HeaderSvg,
  Header,
  LogoBox,
} from './Sidebar.styled';
import instagram from '../../images/sprite.svg';
import telegram from '../../images/sprite.svg';
import twitter from '../../images/sprite.svg';
import linkedin from '../../images/sprite.svg';
import menu from '../../images/sprite.svg';
import { MobileMenu } from './MobileMenu/MobileMenu';
import { useState } from 'react';
import { MobileMenuBox } from './MobileMenu/MobileMenu.styled';

export const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarContainer>
      <Header>
        <LogoBox href="/brand-maze" aria-label="logo company">
          <Logo>Brand maze</Logo>
        </LogoBox>
        <HeaderSvg width="24" height="24" onClick={toggleMenu}>
          <use href={menu + '#menu'}></use>
        </HeaderSvg>
        <MobileMenuBox className={`collapsed ${isOpen ? 'is-expanded' : ''}`}>
          <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
        </MobileMenuBox>
      </Header>

      <SidebarBox>
        <NavList>
          <NavListLink
            className={`link ${location.pathname === '/' ? 'active' : ''}`}
            to="/"
            aria-label="Home"
          >
            Home
          </NavListLink>
          <NavListLink
            className={`link ${location.pathname === '/about' ? 'active' : ''}`}
            to="/about"
            aria-label="About"
          >
            About
          </NavListLink>
          <NavListLink
            className={`link ${
              location.pathname === '/services' ? 'active' : ''
            }`}
            to="/services"
            aria-label="Services"
          >
            Services
          </NavListLink>
          <NavListLink
            className={`link ${
              location.pathname === '/projects' ? 'active' : ''
            }`}
            to="/projects"
            aria-label="Projects"
          >
            Projects
          </NavListLink>
          <NavListLink
            className={`link ${
              location.pathname === '/contact' ? 'active' : ''
            }`}
            to="/contact"
            aria-label="Contact"
          >
            Contact
          </NavListLink>
        </NavList>
        <ContactList>
          <ul>
            <li>
              <ContactListLink href="tel:+38011111111">
                +38011111111
              </ContactListLink>
            </li>

            <ContactListItem>
              <ContactListLink href="mailto:contact@brandmaze.com">
                contact@brandmaze.com
              </ContactListLink>
            </ContactListItem>
          </ul>

          <SocialsList>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={instagram + '#instagram'}></use>
              </svg>
            </SocialsListItem>
            <SocialsListItem>
              <svg width="27" height="27">
                <use href={telegram + '#telegram'}></use>
              </svg>
            </SocialsListItem>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={twitter + '#twitter'}></use>
              </svg>
            </SocialsListItem>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={linkedin + '#linkedin'}></use>
              </svg>
            </SocialsListItem>
          </SocialsList>
        </ContactList>
      </SidebarBox>
    </SidebarContainer>
  );
};