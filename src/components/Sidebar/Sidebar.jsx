import { NavLink } from 'react-router-dom';
import { NavList, SidebarBox } from './Sidebar.styled';

export const Sidebar = () => {
  return (
    <SidebarBox>
      <p>Brand maze</p>

      <nav>
        <NavList>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavList>
      </nav>

      <ul>
        <li>contact@brandmaze.com</li>
        <li>socilas</li>
      </ul>
    </SidebarBox>
  );
};
