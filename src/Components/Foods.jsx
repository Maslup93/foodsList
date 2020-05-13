import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Foods extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.pasta}</h1>
        <button onClick={this.props.click}>Delete food</button>
      </div>
    );
  }
}

Foods.propTypes = {
  pasta: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};

export default Foods;
