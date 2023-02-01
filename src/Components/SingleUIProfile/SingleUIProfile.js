import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import propTypes from 'prop-types';
import './myrockets.css';

const SingleUIProfile = ({ id, name }) => (
  <ListGroup.Item key={id}>
    {name}
  </ListGroup.Item>
);

SingleUIProfile.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
};
export default SingleUIProfile;
