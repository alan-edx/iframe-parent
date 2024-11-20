import React, { useEffect } from 'react';

const Home: React.FC = () => {
  
  const handleMessage = (event: MessageEvent) => {
    if (event.origin !== 'http://localhost:3000') return;

    if (event.data.type === 'SET_COOKIE') {
      const cookieData = event.data.cookieData;
      document.cookie = cookieData; 
      console.log('Cookie set from iframe:', cookieData);
    }
    // if (event.data.type === 'SET_LOCAL_STORAGE') {
    //   localStorage.setItem(event.data.key, event.data.value);
    //   console.log(`Set localStorage: ${event.data.key} = ${event.data.value}`);
    // }

    // if (event.data.type === 'GET_LOCAL_STORAGE') {
    //   const value = localStorage.getItem(event.data.key);
    //   if (event.source && typeof event.source.postMessage === 'function') {
    //     (event.source.postMessage as (message: any, targetOrigin: string) => void)(
    //       { type: 'LOCAL_STORAGE_DATA', key: event.data.key, value },
    //       event.origin
    //     );
    //   }
    // }
    // const localStorageKey = 'localKey';
    // const localStorageValue = 'localValue';
    // window.parent.postMessage({ type: 'SET_LOCAL_STORAGE', key: localStorageKey, value: localStorageValue }, 'http://localhost:3005');
    
    // // Send SessionStorage Data
    // const sessionStorageKey = 'sessionKey';
    // const sessionStorageValue = 'sessionValue';
    // window.parent.postMessage({ type: 'SET_SESSION_STORAGE', key: sessionStorageKey, value: sessionStorageValue }, 'http://localhost:3005');
  };

  useEffect(() => {
    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <iframe
        src="http://localhost:3000" // URL of your iframe
        title="Other React App"
        style={{
          width: '800px', 
          height: '600px',
          border: 'none',
        }}
      />
    </div>
  );
};

export default Home;
