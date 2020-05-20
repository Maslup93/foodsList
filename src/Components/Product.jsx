import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

class product extends Component {
  render() {
    return (
      <div style={productStyle}>
        <h3>{this.props.pasta}</h3>
        <Button className="delete-button" onClick={this.props.click} variant="danger">
          Delete Food
        </Button>
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
