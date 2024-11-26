import React from 'react';
import RoutesComponent from './components/routesComponent'
import Footer from './components/Footer';
import FloatingPopup from './components/FloatingPopup';

const App: React.FC = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <div style={{ paddingBottom: '100px' }}>
        <RoutesComponent />
      </div>
      <FloatingPopup />
      {/* <Footer /> */}
    </div>
  );
};

export default App;