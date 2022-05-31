import React from "react";
import { NavLink } from "react-router-dom";
export default function Sidebar() {
  return (
    <aside>
      <nav className="sidebar-container">
        <ul>
          <li>
            <NavLink exact className="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact className="active" to="/articles">
              Articles
            </NavLink>
          </li>
          <li>
            <NavLink exact className="active" to="/peoples">
              People
            </NavLink>
          </li>
          <li>
            <NavLink exact className="active" to="/books">
              Books
            </NavLink>
          </li>
          <li>
            <NavLink exact className="active" to="/help">
              Help & Support
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
