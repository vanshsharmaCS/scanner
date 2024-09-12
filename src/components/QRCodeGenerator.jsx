import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QRCodeGenerator = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter text to generate QR"
        style={{ marginBottom: '20px' }}
      />
      <div>
        {/* Use QRCodeCanvas instead of QRCode */}
        <QRCodeCanvas value={text} />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
