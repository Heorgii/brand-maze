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
  TikTok,
} from './Sidebar.styled';
import sprite from '../../images/sprite.svg';
import menu from 'images/sprite.svg';
import { MobileMenu } from './MobileMenu/MobileMenu';
import { useEffect, useState } from 'react';
import { MobileMenuBox } from './MobileMenu/MobileMenu.styled';
import { SwitchTheme } from 'components/ThemeStatus/SwitcherTheme/SwitchTheme';

export const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrollPos, setScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = currentScrollPos < scrollPos;

      setVisible(isScrollingUp || currentScrollPos === 0);
      setScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPos]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header isVisible={visible}>
        <LogoBox href="/brand-maze" aria-label="logo company">
          <Logo>Brand maze</Logo>
        </LogoBox>
        <SwitchTheme />
        <HeaderSvg width="24" height="24" onClick={toggleMenu}>
          <use href={menu + '#menu'}></use>
        </HeaderSvg>
        <MobileMenuBox className={`collapsed ${isOpen ? 'is-expanded' : ''}`}>
          <MobileMenu
            isOpen={isOpen}
            toggleMenu={toggleMenu}
            setIsOpen={setIsOpen}
          />
        </MobileMenuBox>
      </Header>
      <SidebarContainer>
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
                <a
                  href="https://www.instagram.com/invites/contact/?i=1wcw0x66x4cku&utm_content=rwvytfj"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20">
                    <use href={sprite + '#instagram'}></use>
                  </svg>
                </a>
              </SocialsListItem>
              <SocialsListItem>
                <a
                  href="https://t.me/brandmaze"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20">
                    <use href={sprite + '#telegram'}></use>
                  </svg>
                </a>
              </SocialsListItem>
              <SocialsListItem>
                <a
                  href="https://www.tiktok.com/@brand.maze?_t=8du33OG9NJN&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TikTok />
                </a>
              </SocialsListItem>
              <SocialsListItem>
                <svg width="20" height="20">
                  <use href={sprite + '#linkedin'}></use>
                </svg>
              </SocialsListItem>
            </SocialsList>
          </ContactList>
        </SidebarBox>
      </SidebarContainer>
    </>
  );
};
