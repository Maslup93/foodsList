import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

class AddFood extends Component {
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
    this.props.addfood(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    return (
      <Form action="#" onSubmit={this.handleSubmit}>
        <Form.Group controlId="productForm">
          <Form.Label>Food</Form.Label>
          <Form.Control
            type="string"
            placeholder="Food Name"
            onChange={this.handleChange}
            id="itemName"
            value={this.state.name}
          />
          <Form.Text className="text-muted">
            Name of your food, which will later be used for search and filtering options.
          </Form.Text>
        </Form.Group>
        <Button
          className="float-right"
          variant="primary"
          type="submit"
          disabled={this.state.name.length < 1}
        >
          Submit
        </Button>
      </Form>
    );
    // return (
    //   <form onSubmit={this.handleSubmit}>
    //     <label htmlFor="name">Product:</label>
    //     <input
    //       type="text"
    //       id="name"
    //       onChange={this.handleChange}
    //       placeholder="Add Product..."
    //       style={{ flex: '10', padding: '5px' }}
    //     />
    //     <button className="btn" disabled={this.state.name.length < 1} style={{ flex: '1' }}>
    //       submit
    //     </button>
    //   </form>
    // );
  }
}

AddFood.propTypes = {
  addfood: PropTypes.func.isRequired,
};

export default AddFood;
