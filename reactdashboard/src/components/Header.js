import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="navigation-bar">
      <div className="logo-container">
        <Link to="/"><span  className="logo">Dashboard</span></Link>
      </div>
    </header>
  );
}
