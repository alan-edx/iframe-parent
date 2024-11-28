import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header style={headerStyle}>
      <nav>
        <ul style={navListStyle}>
          <li style={navItemStyle}>
            <Link to="/" style={linkStyle}>Home</Link>
          </li>
          <li style={navItemStyle}>
            <Link to="/iframe" style={linkStyle}>Iframe</Link>
          </li>
          <li style={navItemStyle}>
            <Link to="/about-us" style={linkStyle}>About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: 'white',
};

const logoStyle: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: 'bold',
};

const navListStyle: React.CSSProperties = {
  listStyleType: 'none',
  display: 'flex',
  margin: 0,
  padding: 0,
};

const navItemStyle: React.CSSProperties = {
  marginRight: '20px',
};

const linkStyle: React.CSSProperties = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '18px',
};

export default Header;
