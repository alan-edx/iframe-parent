import React, { useEffect, useRef } from 'react';

const IFrame: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  // const clientId = "2e799083-730b-40c9-ada0-d50f8a5c0357"
  // const clientId = "6d4ead19-b011-488c-97e4-b506bf5d6cd2"
  // const clientId = "7db3cc91-7adc-484b-adcc-f6676754bff9"
  const clientId = "6b0e2a9a-da01-4b1f-872b-7bb14c8cf5d8" //yopmail-alan
  const deviceId = "Yd473Xajz7L6w7uwiL6kSokFwiBcAHuQlJd8PBPbxLrgzqxFNW11cgAqkPTPa6YEyx0qBHxJvlhIxFAxwFg3pA=="; 

  const handleMessage = (event: MessageEvent) => {
    if (event.origin !== 'http://localhost:3000') return;

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
        console.log("Sending message to iframe--->>>>11111", { clientId, deviceId });
        iframe.contentWindow?.postMessage(
          { clientId, deviceId },
          'http://localhost:3000'
        );
      };
    }
  }, [clientId, deviceId]);

  return (
    <div>
      <iframe
        ref={iframeRef}
        src="http://localhost:3000" // URL of your iframe
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
