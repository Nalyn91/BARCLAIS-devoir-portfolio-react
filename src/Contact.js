import React from 'react';
import './App.css';

function Contact() {
  return (
    <div>
      <section className="contact-section">
        <h1>Contact</h1>
        <p>Pour me contacter en vue d’un entretien ou d’une future collaboration, merci de remplir le formulaire de contact.</p>
        <div className="underline"></div>
        <div className="contact-container">
          <div className="contact-form">
            <h2>Formulaire de contact</h2>
            <form>
              <input type="text" placeholder="Votre nom" />
              <input type="email" placeholder="Votre adresse email" />
              <input type="tel" placeholder="Votre numéro de téléphone" />
              <input type="text" placeholder="Sujet" />
              <textarea placeholder="Votre message" rows={8}></textarea>
              <button type="submit">Envoyer</button>
            </form>
          </div>
          <div className="contact-info">
            <h2>Mes coordonnées</h2>
            <div className="info-block">
              <div><b>Anael B</b></div>
              <div>📍 40 rue Laure Diebold<br />69009 Lyon, France</div>
              <div>📞 10 20 30 40 50</div>
              <div>✉️ anael.jb@gmail.com</div>
            </div>
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps?q=40+Rue+Laure+Diebold,+69009+Lyon,+France&output=embed"
              width="100%"
              height="250"
              style={{ border: 0, marginTop: "15px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;