import {
  ContactListItem,
  ContactListLink,
  NavListLink,
  SocialsList,
  SocialsListItem,
} from '../Sidebar.styled';
import {
  ContactListMobile,
  HeaderSvgMobile,
  MobileBox,
  NavListMobile,
} from './MobileMenu.styled';
import instagram from '../../../images/sprite.svg';
import facebook from '../../../images/sprite.svg';
import twitter from '../../../images/sprite.svg';
import linkedin from '../../../images/sprite.svg';
import close from '../../../images/sprite.svg';
import { useLocation } from 'react-router';

export const MobileMenu = ({ isOpen, toggleMenu }) => {
  const location = useLocation();

  return (
    <>
      <HeaderSvgMobile width="24" height="24" onClick={toggleMenu}>
        <use href={close + '#close'}></use>
      </HeaderSvgMobile>

      {isOpen && (
        <MobileBox>
          <NavListMobile>
            <NavListLink
              className={`link ${location.pathname === '/' ? 'active' : ''}`}
              to="/"
              aria-label="Home"
            >
              Home
            </NavListLink>
            <NavListLink
              className={`link ${
                location.pathname === '/about' ? 'active' : ''
              }`}
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
          </NavListMobile>
          <ContactListMobile>
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
                <svg width="20" height="20">
                  <use href={facebook + '#facebook'}></use>
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
          </ContactListMobile>
        </MobileBox>
      )}
    </>
  );
};
