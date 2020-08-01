import React from 'react';

function MadeBy({ link }) {
  return (
    <div>
      <a href={link}>
        Made by Lucio <i className="fab fa-github-alt" aria-hidden="true" />
      </a>
    </div>
  );
}

export default MadeBy;
