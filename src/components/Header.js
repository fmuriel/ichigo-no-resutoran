import React from 'react';

const Header = props => (
  <header className="top">
    <h1>Ichigo
            <span className="ofThe">
        <span className="of">no</span>
      </span>
      resutoran</h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </header>
);

export default Header;