import { useLocation } from 'react-router-dom';
import {
  ContactList,
  ContactListItem,
  Logo,
  NavList,
  NavListLink,
  SidebarBox,
} from './Sidebar.styled';

export const Sidebar = () => {
  const location = useLocation();

  return (
    <SidebarBox>
      <Logo>Brand maze</Logo>

      <NavList>
        <NavListLink
          className={`link ${location.pathname === '/' ? 'active' : ''}`}
          to="/"
        >
          Home
        </NavListLink>
        <NavListLink
          className={`link ${location.pathname === '/about' ? 'active' : ''}`}
          to="/about"
        >
          About
        </NavListLink>
        <NavListLink
          className={`link ${
            location.pathname === '/services' ? 'active' : ''
          }`}
          to="/services"
        >
          Services
        </NavListLink>
        <NavListLink
          className={`link ${
            location.pathname === '/projects' ? 'active' : ''
          }`}
          to="/projects"
        >
          Projects
        </NavListLink>
        <NavListLink
          className={`link ${location.pathname === '/contact' ? 'active' : ''}`}
          to="/contact"
        >
          Contact
        </NavListLink>
      </NavList>

      <ContactList>
        <ContactListItem>contact@brandmaze.com</ContactListItem>
        <li>socilas</li>
      </ContactList>
    </SidebarBox>
  );
};
