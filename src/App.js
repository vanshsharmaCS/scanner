// src/App.js
import React from 'react';
import QRCodeGenerator from './components/QRCodeGenerator';
// Commenting out mobile-only component
// import QRCodeScanner from './components/QRCodeScanner';

function App() {
  return (
    <div className="App">
      <h1>QR Code App</h1>
      <QRCodeGenerator />
      {/* Comment out the QRCodeScanner as it's meant for mobile */}
      {/* <QRCodeScanner /> */}
    </div>
  );
}

export default App;
