import React, { useState } from 'react';
import './Footer.css'; 

const Footer: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 edeXa. All Rights Reserved.</p>
        <img
          src="https://bstamp-live.s3.eu-central-1.amazonaws.com/assets/bstamp-images/bstamp-logo.png" 
          alt="Popup Icon"
          className="popup-icon"
          onClick={togglePopup}
        />
      </div>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-overlay" onClick={togglePopup}></div>
          <div className="popup-content">
            <iframe
              src="http://example.com" 
              title="Popup Iframe"
              style={{
                width: '400px',
                height: '600px',
                border: 'none',
              }}
            />
            <button className="close-button" onClick={togglePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
