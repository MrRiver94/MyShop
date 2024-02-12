import React from 'react';
import PropTypes from 'prop-types'; 
import './Banner.css';


const Banner = ({ name }) => {
  return (
    <div className="banner-container">
      <p>¡Hola {name}! Tenemos un descuento de hasta un 20% en tu primera compra.</p>
    </div>
  );
};


Banner.propTypes = {
  name: PropTypes.string.isRequired
};

export default Banner;
