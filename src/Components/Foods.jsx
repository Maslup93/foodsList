import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Foods extends Component {
  render() {
    return (
      <div style={foodsStyle}>
        <h3>{this.props.pasta}</h3>
        <button style={btnStyle} onClick={this.props.click}>
          X
        </button>
      </div>
    );
  }
}

Foods.propTypes = {
  pasta: PropTypes.string,
};

Foods.defaultProps = {
  pasta: null,
};

const foodsStyle = {
  backgroundColor: '#c7ccd4',
  padding: '10px',
  borderBottom: '1px #ccc dotted',
};
const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
};

export default Foods;
