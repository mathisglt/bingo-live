import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Fichier CSS pour le style

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>Bingo Live</h2>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/profile">Profil</Link>
        </li>
        <li>
          <Link to="/store">Boutique</Link>
        </li>
        <li>
          <Link to="/game">Jeu</Link>
        </li>
        <li>
          <Link to="/events">Événements</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
