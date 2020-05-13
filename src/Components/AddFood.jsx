import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: '',
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addFood(this.state.food);
    // this.setState({ title: '' });
  };

  onChange = (e) => this.setState({ food: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type="text"
          name="food"
          style={{ flex: '10', padding: '5px' }}
          placeholder="add food..."
          value={this.state.food}
          onChange={this.onChange}
        />
        <input type="submit" value="submit" className="btn" style={{ flex: '1' }} />
      </form>
    );
  }
}

AddFood.propTypes = {
  addFood: PropTypes.func.isRequired,
};

export default AddFood;
