import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Services from './Services';
import Contact from './Contact';
import Portfolio from './portfolio';
import MentionsLegales from './mentions-1';
import GithubProfileModal from './modale';
import PhotoAnael from './images/PhotoAnael.jpg';


// Barre de navigation
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(o => !o);
  const closeMenu  = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="brand">Anael</div>

      <button
        className={`hamburger ${menuOpen ? 'is-active' : ''}`}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={toggleMenu}
      >
        <span className="hamburger__bar" />
        <span className="hamburger__bar" />
        <span className="hamburger__bar" />
      </button>

      <ul className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>HOME</Link></li>
        <li><Link to="/Services" onClick={closeMenu}>SERVICES</Link></li>
        <li><Link to="/portfolio" onClick={closeMenu}>PORTFOLIO</Link></li>
        <li><Link to="/Contact" onClick={closeMenu}>CONTACT</Link></li>
        <li><Link to="/mentions-1" onClick={closeMenu}>MENTIONS LÉGALES</Link></li>
      </ul>
    </nav>
  );
}

// Section principale "Hero"
function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>Bonjour, je suis Anael</h1>
        <h2>Développeur web full stack</h2>
        <button className="cta" onClick={openModal}>En savoir plus</button>
        <br />
        <GithubProfileModal isOpen={isModalOpen} onClose={closeModal} />


      </div>
    </section>
  );
}

// Section "A propos" + compétences
function AboutSkills() {
  return (
    <section className="about-skills">
      <div className="about">
        <h3>A propos</h3>
        <div className="about-inner">
          <img src={PhotoAnael} alt="PhotoAnael" className="profile-pic" />
          <div className="about-text">
            <p>Etudiante au Centre Européen de Formation; j'acquière des compétences indispensables en language de programmation front-end et back-end.</p>
            <p>Visitez mon portfolio, afin de découvrir l'ensemble de mes projets</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?</p>
          </div>
        </div>
      </div>
      <div className="skills">
        <h3>Mes compétences</h3>
        <SkillBar label="HTML5" percent={90} color="#e44d26" />
        <SkillBar label="CSS3" percent={80} color="#0097c4" />
        <SkillBar label="JAVASCRIPT" percent={70} color="#f7e018" />
        <SkillBar label="PHP" percent={60} color="#7377ad" />
        <SkillBar label="REACT" percent={50} color="#61dafb" />
      </div>
    </section>
  );
}

function SkillBar({ label, percent, color }) {
  return (
    <div className="skillbar">
      <span className="skill-label">{label} {percent}%</span>
      <div className="bar-bg">
        <div className="bar-fill" style={{width: `${percent}%`, background: color}}></div>
      </div>
    </div>
  );
}

// Pied de page
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <b>Anael</b>
        <div>40 rue Lorem Dolor<br/>60000 Lyon, France</div>
        <div>Tél: 10 20 30 40 50</div>
        <div>anael.jb@gmail.com</div>
        <div className="footer-socials">
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
      <div className="footer-section">
        <b>Liens utiles</b>
        <ul>
          <li>Accueil</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Me contacter</li>
          <li>Mentions légales</li>
        </ul>
      </div>
      <div className="footer-section">
        <b>Mes dernières réalisations</b>
        <ul>
          <li>Fresh Food</li>
          <li>Restaurant Akira</li>
          <li>Espace bien-être</li>
          <li>SEO</li>
          <li>Création d'une API</li>
          <li>Maquette d'un site</li>
        </ul>
      </div>
    </footer>
  );
}

// Composant principal avec routage et la modale GitHub sur la page Home
function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero onOpenModal={() => setModalOpen(true)} />
              <AboutSkills />
              <GithubProfileModal open={modalOpen} onClose={() => setModalOpen(false)} />
            </>
          } />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/mentions-1" element={<MentionsLegales />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
