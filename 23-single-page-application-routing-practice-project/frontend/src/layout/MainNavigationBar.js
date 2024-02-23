import { NavLink } from "react-router-dom";

export default function MainNavigationBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={({isActive}) => isActive ? 'active' : undefined}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/events" className={({isActive}) => isActive ? 'active' : undefined}>Events Page</NavLink>
        </li>
      </ul>
    </nav>
  );
}