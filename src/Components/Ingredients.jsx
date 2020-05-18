import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Ingredients extends Component {
  render() {
    return (
      <div style={ingredientsStyle}>
        <h3>{this.props.ingrprop}</h3>
        <button style={btnStyle} onClick={this.props.click}>
          X
        </button>
      </div>
    );
  }
}

Ingredients.propTypes = {
  ingrprop: PropTypes.string,
};

Ingredients.defaultProps = {
  ingrprop: null,
};

const ingredientsStyle = {
  backgroundColor: '#c7ccd4',
  border: '1px solid black',

  padding: '10px',
  borderBottom: '1px #ccc ',
};
const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
};

export default Ingredients;
