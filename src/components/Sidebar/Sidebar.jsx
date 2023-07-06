import { useLocation } from 'react-router-dom';
import {
  ContactList,
  ContactListItem,
  ContactListLink,
  Logo,
  NavList,
  NavListLink,
  SidebarBox,
} from './Sidebar.styled';

export const Sidebar = () => {
  const location = useLocation();

  return (
    <SidebarBox>
      <Logo href="/brand-maze" aria-label="logo company">
        Brand maze
      </Logo>

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
          className={`link ${location.pathname === '/contact' ? 'active' : ''}`}
          to="/contact"
          aria-label="Contact"
        >
          Contact
        </NavListLink>
      </NavList>

      <ContactList>
        <ContactListItem>
          <ContactListLink href="mailto:contact@brandmaze.com">
            contact@brandmaze.com
          </ContactListLink>
        </ContactListItem>
        <li>socials</li>
      </ContactList>
    </SidebarBox>
  );
};
