import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { Component } from 'react';

class DropdownButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addItem(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Example select</Form.Label>
            <Form.Control as="select">
              <option>Mesas</option>
              <option>Delivery/Takeaway</option>
              <option>Gastos</option>
            </Form.Control>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="string"
                placeholder="Price"
                onChange={this.handleChange}
                id="name"
                value={this.state.name}
              />
            </Form.Group>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
DropdownButton.propType = {
  addItem: PropTypes.func.isRequired,
};

export default DropdownButton;
