import React from 'react';
import PropTypes from 'prop-types';

const MainContainer = ({ children }) => {
  return <div style={{ paddingTop: 15 }}>{children}</div>;
};

MainContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainContainer;
