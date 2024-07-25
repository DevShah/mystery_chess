import React from 'react';
import './infobar.css';

export const Infobar = ({ hover }) => {
  return (
    <div className="infobar-container">
      <div className="infobar-title">Possible States:</div>
      <div className="infobar-content">{hover}</div>
    </div>
  );
};

export default Infobar;
