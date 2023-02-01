import React from 'react';
import propTypes from 'prop-types';
import './SingleRocket.css';

const SingleRocket = ({
  id, name, description, image,
}) => (
  <div className="wraper" key={id}>
    <div className="rocket-container">
      <img src={image} alt="rocket" />
      <div className="rocket-info">
        <h3 className="title">{name}</h3>
        <p className="rocket-description">{description}</p>
        <button className="btn" type="button">
          Reserve Rocket
        </button>
      </div>
    </div>
  </div>
);

SingleRocket.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
};
export default SingleRocket;
