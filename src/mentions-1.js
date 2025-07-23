import React, { useState } from 'react';
import './App.css'; // ou un fichier CSS dédié si tu préfères

function MentionsLegales() {
  const [open, setOpen] = useState(0); // 0: Editeur, 1: Hébergeur, 2: Crédits

  return (
    <div>
      <section className="legal-section">
        <h1 className="legal-title">Mentions légales</h1>
        <div className="underline"></div>
        <div className="legal-accordion">
          {/* Editeur du site */}
          <div className="accordion-item">
            <div
              className={`accordion-title ${open === 0 ? "active" : ""}`}
              onClick={() => setOpen(open === 0 ? -1 : 0)}
              style={{ background: open === 0 ? "#dbeafe" : "#f9f9f9" }}
            >
              Editeur du site
              <span className="accordion-arrow">{open === 0 ? "▲" : "▼"}</span>
            </div>
            {open === 0 && (
              <div className="accordion-content">
                <div className="legal-editor">
                  <b>Anael</b>
                  <div>
                    <span role="img" aria-label="bâtiment">🏢</span> 40 rue Laure Diebold<br />
                    <span role="img" aria-label="localisation">📍</span> 69009 Lyon, France<br />
                    <span role="img" aria-label="téléphone">📞</span> 10 20 30 40 50<br />
                    <span role="img" aria-label="email">✉️</span> anael.jb@gmail.com
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Hébergeur */}
          <div className="accordion-item">
            <div
              className={`accordion-title ${open === 1 ? "active" : ""}`}
              onClick={() => setOpen(open === 1 ? -1 : 1)}
              style={{ background: open === 1 ? "#dbeafe" : "#f9f9f9" }}
            >
              Hébergeur
              <span className="accordion-arrow">{open === 1 ? "▲" : "▼"}</span>
            </div>
            {open === 1 && (
              <div className="accordion-content">
                <div className="legal-host">
                  <b>alwaysdata</b>
                  <div>91 Rue du Faubourg Saint-Honoré, 75008 Paris</div>
                  <div>
                    <span role="img" aria-label="web">🌐</span>
                    <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">
                      www.alwaysdata.com
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Crédits */}
          <div className="accordion-item">
            <div
              className={`accordion-title ${open === 2 ? "active" : ""}`}
              onClick={() => setOpen(open === 2 ? -1 : 2)}
              style={{ background: open === 2 ? "#dbeafe" : "#f9f9f9" }}
            >
              Crédits
              <span className="accordion-arrow">{open === 2 ? "▲" : "▼"}</span>
            </div>
            {open === 2 && (
              <div className="accordion-content">
                <h2>Crédits</h2>
                <p>
                  Ce site a été réalisé par Anael, étudiant au <a href="https://www.centre-europeen-formation.fr/" target="_blank" rel="noopener noreferrer">Centre Européen de formation</a>.<br /><br />
                  <i>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer">Pixabay</a>.</i><br /><br />
                  La favicon de ce site a été fournie par <a href="https://www.flaticon.com/free-icons/john-doe" target="_blank" rel="noopener noreferrer">John doe Icons erstellt von Freepik - Flaticon</a>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default MentionsLegales;