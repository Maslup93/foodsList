import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Foods from './Foods';
import AddFoods from './AddFoods';

class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [],
      showFood: false,
    };
  }

  componentDidMount() {
    console.log('component mounted!!!!');
  }

  componentDidUpdate() {
    console.log('component updated!');
  }

  // TO SHOW FOOD
  toggleFoodHandler = () => {
    const doesShow = this.state.showFood;
    this.setState({ showFood: !doesShow });
  };

  //TO DELETE FOOD
  deleteFoodHandler = (id) => {
    const updatedFoods = this.state.foods.filter((food) => food.id !== id);
    this.setState({ foods: updatedFoods });
  };

  //TO ADD FOOD
  addFoodHandler = (foodName) => {
    const newFood = { name: foodName, id: uuidv4() };
    const newFoods = [...this.state.foods, newFood];
    this.setState({
      foods: newFoods,
    });
  };

  render() {
    let foods = null;
    if (this.state.showFood) {
      foods = (
        <div>
          {this.state.foods.map((foodPito) => {
            return (
              <Foods
                click={() => this.deleteFoodHandler(foodPito.id)}
                pasta={foodPito.name}
                key={foodPito.id}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div>
        <AddFoods addFood={this.addFoodHandler} />
        <button
          className="btn"
          disabled={this.state.foods.length < 1}
          onClick={this.toggleFoodHandler}
        >
          show food
        </button>
        {foods}
      </div>
    );
  }
}
export default FoodList;
