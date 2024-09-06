import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './assets/logo-skinmed-variations-plan-de-travail-1.png';
import './App.css';
import Avis from './components/Avis';
import Simulation from './components/Simulation';
import Home from './components/Home';
import MultiStepForm from './components/steps/MultiStepForm';
import PharmacyPotentialTable from './components/Potentiel';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="Skinmed Logo" />
          <nav className="App-nav">
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/step">Step</Link></li>
              <li><Link to="/avis">Avis</Link></li>
              <li><Link to="/potentiel">Potentiel</Link></li>
              <li><Link to="/simulation">Présentation</Link></li>
            </ul>
          </nav>
        </header>

        
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/step" element={<MultiStepForm/>} />
            <Route path="/avis" element={<Avis />} />
            <Route path="/potentiel" element={<PharmacyPotentialTable />} />
            <Route path="/simulation" element={<Simulation />} />
          </Routes>
        </main>


        <footer className="App-footer">
          <p>© 2024 Skinmed Avis. Tous droits réservés.</p>
          <p>
            <a
              className="App-link"
              href="https://skinmed-mongo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visitez notre site officiel
            </a>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
