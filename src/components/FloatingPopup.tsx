import React, { useState } from 'react';
import IFrameComponent from './IFrameComponent';

const FloatingPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          height: '60px',
          backgroundColor: '#000066',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
          zIndex: 1000,
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src="https://bstamp-live.s3.eu-central-1.amazonaws.com/assets/bstamp-images/bstamp-logo.png"
          alt="Open Popup"
          style={{ width: '100px', height: '30px' }}
        />
      </div>

      {isOpen && (
        <>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(5px)',
              zIndex: 999, 
            }}
            onClick={() => setIsOpen(false)} 
          ></div>

          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '1000px',
              height: '800px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
              zIndex: 1001, 
              overflow: 'hidden',
            }}
          >
            <IFrameComponent
              src="http://localhost:3000"
              width="100%"
              height="100%"
            />
          </div>
        </>
      )}
    </>
  );
};

export default FloatingPopup;