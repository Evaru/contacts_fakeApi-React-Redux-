import React from 'react';
import { Redirect } from 'react-router';

const NotFound = () => {
  return (
    <Redirect to="/" />
  );
};

export default NotFound;