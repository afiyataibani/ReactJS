import React from 'react';

function Footer() {
  return (
    <div
      style={{
        backgroundColor: '#222',
        padding: '10px 20px',
        width: '100vw',
        position: 'fixed',
        bottom: '0',
        left: '0',
        color: "white",
      }}
    >
      <h3 style={{ textAlign: 'center',color:'#white', margin: 0 }}>
        © 2025 Afiya Taibani. All rights reserved.
      </h3>
    </div>
  );
}

export default Footer;