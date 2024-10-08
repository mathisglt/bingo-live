import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar'; // On va créer ce composant
import Profile from './pages/Profile'; // On va créer ces pages
import Store from './pages/Store';
import Game from './pages/Game';
import Events from './pages/Events';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Hotbar */}
        <Navbar />

        {/* Contenu dynamique */}
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/store" element={<Store />} />
          <Route path="/game" element={<Game />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
