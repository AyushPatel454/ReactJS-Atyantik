import { NavLink } from "react-router-dom";

export default function EventNavigationBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/events" end>Events</NavLink>
        </li>
        <li>
          <NavLink to="/events/new">New Event</NavLink>
        </li>
      </ul>
    </nav>
  );
}