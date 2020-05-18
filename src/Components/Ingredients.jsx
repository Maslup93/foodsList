import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Ingredients extends Component {
  render() {
    return (
      <div>
        <p>{this.props.ingrprop}</p>
        <button onClick={this.props.click}>Delete ingredient</button>
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

export default Ingredients;
