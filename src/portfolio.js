import React from 'react';
import './App.css';
import freshfood from './images/portfolio/fresh-food.jpg';
import akira from './images/portfolio/restaurant-japonais.jpg';
import bienetre from './images/portfolio/espace-bien-etre.jpg';
import seo from './images/portfolio/seo.jpg';
import api from './images/portfolio/screens.jpg';
import maquette from './images/portfolio/coder.jpg';

export default function Portfolio() {
  const projets = [
    {
      titre: "Fresh Food",
      desc: "Site de vente de produits frais en ligne",
      image: freshfood,
      site: "#",
      detail: "Site réalisé avec PHP et MySQL"
    },
    {
      titre: "Restaurant Akira",
      desc: "Site de vente de produits frais en ligne",
      image: akira,
      site: "#",
      detail: "Site réalisé avec WordPress"
    },
    {
      titre: "Espace bien-être",
      desc: "Site de vente de produits frais en ligne",
      image: bienetre,
      site: "#",
      detail: "Site réalisé avec LARAVEL"
    },
    {
      titre: "SEO",
      desc: "Amélioration du référencement d'un site e-commerce",
      image: seo,
      site: "#",
      detail: "Utilisation des outils SEO"
    },
    {
      titre: "Création d'une API",
      desc: "Création d'une API RESTFUL publique",
      image: api,
      site: "#",
      detail: "PHP - SYMFONY"
    },
    {
      titre: "Maquette d'un site web",
      desc: "Création du prototype d'un site",
      image: maquette,
      site: "#",
      detail: "Réalisé avec FIGMA"
    },
  ];

  return (
    <div>
      <div className="services-hero">
        <img src={seo} alt="Portfolio banner" className="services-banner" />
      </div>
      <section className="portfolio-section">
        <h1>Portfolio</h1>
        <p>Voici quelques-unes de mes réalisations.</p>
        <div className="underline"></div>
        <div className="portfolio-grid">
          {projets.map((prj, idx) => (
            <div className="portfolio-card" key={idx}>
              <img src={prj.image} alt={prj.titre} />
              <h2>{prj.titre}</h2>
              <p>{prj.desc}</p>
              <a href={prj.site} className="btn-blue" target="_blank" rel="noopener noreferrer">Voir le site</a>
              <div className="portfolio-detail">{prj.detail}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}