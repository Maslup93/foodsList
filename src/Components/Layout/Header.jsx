import React from 'react';

const Header = () => {
  return (
    <header style={headderStyle}>
      <h1>Foods List</h1>
    </header>
  );
};
const headderStyle = {
  background: '#1d3573',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
};

export default Header;
