import React from "react";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <aside>
      <nav className="sidebar-container">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/peoples">People</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/help">Help & Support</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
