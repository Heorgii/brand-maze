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
import { FaTiktok } from 'react-icons/fa';
import linkedin from '../../images/sprite.svg';
import menu from 'images/sprite.svg';
import { MobileMenu } from './MobileMenu/MobileMenu';
import { useEffect, useState } from 'react';
import { MobileMenuBox } from './MobileMenu/MobileMenu.styled';
import { SwitchTheme } from 'components/ThemeStatus/SwitcherTheme/SwitchTheme';

export const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  // const [scrollPos, setScrollPos] = useState(0);
  // const [visible, setVisible] = useState(true);

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
    <SidebarContainer>
      {/* className={visible ? 'scroll-up' : 'scroll-down'} */}
      <Header isVisible={visible}>
        <LogoBox href="/brand-maze" aria-label="logo company">
          <Logo>Brand maze</Logo>
        </LogoBox>
        <SwitchTheme />
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
              <svg width="22" height="22">
                <use href={telegram + '#telegram'}></use>
              </svg>
            </SocialsListItem>
            <SocialsListItem>
              <FaTiktok />
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
