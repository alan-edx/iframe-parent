import React, { useEffect, useRef } from 'react';

interface IframeComponentProps {
  src: string;
  width: string;
  height: string;
}

const IFrameComponent: React.FC<IframeComponentProps> = ({ src, width, height }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Define clientId and deviceId inside the component
  const clientId = "6d4ead19-b011-488c-97e4-b506bf5d6cd2";
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
        iframe.contentWindow?.postMessage(
          { clientId, deviceId },
          'http://localhost:3000'
        );
      };
    }
  }, [clientId, deviceId]);

  return (
    <iframe
      ref={iframeRef}
      src={src}
      title="Other React App"
      style={{ width, height, border: 'none' }}
    />
  );
};

export default IFrameComponent;
