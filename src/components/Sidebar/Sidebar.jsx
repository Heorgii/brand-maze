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
import instagram from '../../images/sprite.svg';

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
        <ContactListItem>
          <ContactListLink href="mailto:contact@brandmaze.com">
            contact@brandmaze.com
          </ContactListLink>
        </ContactListItem>
          <li>
            <svg width="20" height="20">
              <use href={instagram + '#instagram'}></use>
            </svg>
          </li>
          <li></li>
          <li></li>
          <li></li>
      </ContactList>
    </SidebarBox>
  );
};
