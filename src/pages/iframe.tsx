import React, { useEffect, useRef } from 'react';

const IFrame: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const clientId = "2e799083-730b-40c9-ada0-d50f8a5c0357"
  const deviceId = "Yd473Xajz7L6w7uwiL6kSokFwiBcAHuQlJd8PBPbxLrgzqxFNW11cgAqkPTPa6YEyx0qBHxJvlhIxFAxwFg3pA=="; 

  const handleMessage = (event: MessageEvent) => {
    // if (event.origin !== 'http://localhost:3000') return;
    // if (event.origin !== 'https://bstampiframe.io-world.com/') return;

    console.log('Received message:', event.data);

    if (event.data.type === 'SET_COOKIE') {
      const cookieData = event.data.encCookieData;
      console.log('Cookie Data:', cookieData);
      document.cookie = cookieData; 
      console.log('Cookie set from iframe:', cookieData);
    }
  };

  useEffect(() => {
    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  useEffect(() => {
    // Send the clientId and deviceId to the iframe once it's loaded
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.onload = () => {
        iframe.contentWindow?.postMessage(
          { clientId, deviceId },
          'https://bstampiframe.io-world.com/'
        );
      };
    }
  }, [clientId, deviceId]);

  return (
    <div>
      <iframe
        ref={iframeRef}
        src="https://bstampiframe.io-world.com/" // URL of your iframe
        title="Other React App"
        style={{
          width: '1000px', 
          height: '800px',
          border: 'none',
        }}
      />
    </div>
  );
};

export default IFrame;
