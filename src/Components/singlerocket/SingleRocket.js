import React from 'react';
import propTypes from 'prop-types';
import './SingleRocket.css';
import { useDispatch } from 'react-redux';
import { reservedRocket } from '../redux/Rocket-state/Rocket';

const SingleRocket = ({
  id, name, description, image, reserved,
}) => {
  const check = useDispatch();
  const checkReservation = () => {
    check(reservedRocket(id));
  };
  return (
    <div className="wraper" key={id}>
      <div className="rocket-container">
        <img src={image} alt="rocket" />
        <div className="rocket-info">
          <h3 className="title">{name}</h3>
          <p className="rocket-description">
            {reserved ? (
              <span className="reserved">Reserved</span>
            ) : (
              ''
            )}
            {description}
          </p>
          <button className="btn" type="button" onClick={checkReservation}>
            {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
          </button>
        </div>
      </div>
    </div>
  );
};
SingleRocket.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  reserved: propTypes.bool.isRequired,
};
export default SingleRocket;
