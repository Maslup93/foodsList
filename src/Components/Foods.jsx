import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

class Foods extends Component {
  render() {
    return (
      <div style={foodsStyle}>
        <h4>{this.props.pasta}</h4>
        <Button className="delete-button" onClick={this.props.click} variant="danger">
          Delete Food
        </Button>
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
};

export default Foods;
