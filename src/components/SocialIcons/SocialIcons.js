import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SocialIcons = (props, context) => {
  const { theme: { colorPrimary } } = context;

  return (
    <div className="social-icons animate-icons">
      <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/cairothedino" style={ { color: colorPrimary } }><i className="fab fa-instagram"></i></a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100039086182081" style={ { color: colorPrimary } }><i className="fab fa-facebook"></i></a>
    </div>
  );
};

SocialIcons.contextTypes = {
  theme: PropTypes.any
};

export default SocialIcons;
