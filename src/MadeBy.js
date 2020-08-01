import React from 'react';
import './MadeBy.css';

function MadeBy({ link }) {
  return (
    <div className="MadeBy">
      <a href={link}>
        Made by Lucio <i className="fab fa-github-alt" aria-hidden="true" />
      </a>
    </div>
  );
}

export default MadeBy;
