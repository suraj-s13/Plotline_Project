import React from 'react';

function RoundButton({ src, alt, tooltip }) {
  return (
    <button className="round-button">
      <img
        src={src}
        alt={alt}
        title={tooltip}
      />
    </button>
  );
}

export default RoundButton;
