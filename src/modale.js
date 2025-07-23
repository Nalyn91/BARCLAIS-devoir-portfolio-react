import React from 'react';
import PhotoAnael from './images/PhotoAnael.jpg'; 

export default function GithubProfileModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="github-modal">
        <h2>Mon profil GitHub</h2>
        <div className="modal-content">
          <img src={PhotoAnael} alt="Avatar" className="modal-avatar" />
          <div className="modal-info">
            <a href="#" className="modal-link">Anael</a>
            <div className="modal-field">
              <span className="modal-label"> Hi ! I'm Anael. Don't be shy, and left a message if you need my help</span>
            </div>
            <div className="modal-field">
              <span className="modal-label">📦 Repositories : 1</span>
            </div>
            <div className="modal-field">
              <span className="modal-label">👥 Followers : 16</span>
            </div>
            <div className="modal-field">
              <span className="modal-label">→ Following : 0</span>
            </div>
          </div>
        </div>
        <button className="btn-modal" onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
}