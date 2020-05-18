import React, { Component } from 'react';
import PropTypes from 'prop-types';

class product extends Component {
  render() {
    return (
      <div style={productStyle}>
        <h3>{this.props.pasta}</h3>
        <button style={btnStyle} onClick={this.props.click}>
          X
        </button>
      </div>
    );
  }
}

product.propTypes = {
  pasta: PropTypes.string,
};

product.defaultProps = {
  pasta: null,
};

const productStyle = {
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

export default product;
