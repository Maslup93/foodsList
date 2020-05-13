import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddFoods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addFood(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Food:</label>
          <input type="text" id="name" onChange={this.handleChange} placeholder="Add Food..." />
          <button>submit</button>
        </form>
      </div>
    );
  }
}

AddFoods.propTypes = {
  addFood: PropTypes.func.isRequired,
};

export default AddFoods;
