import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class Item extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.position}</td>
        <td>{this.props.name}</td>
        <td>
          <Button onClick={this.props.click} size="sm" variant="danger" className="float-right">
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  position: PropTypes.number.isRequired,
};

export default Item;
