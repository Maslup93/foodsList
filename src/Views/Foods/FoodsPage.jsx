import React, { Component, Fragment } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import AddFoods from './Components/AddFoods';
import FoodsList from './Components/FoodsList';

class FoodsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [],
      // showProduct: false,
    };
  }

  componentDidMount() {
    console.log('component mounted!!!!');
  }

  componentDidUpdate() {
    console.log('component updated!');
  }

  //TO DELETE FOOD
  deleteFoodHandler = (id) => {
    const updatedProducts = this.state.foods.filter((product) => product.id !== id);
    this.setState({ foods: updatedProducts });
  };

  //TO ADD FOOD
  addFoodHandler = (foodName) => {
    const newFood = { name: foodName, id: uuidv4() };
    const newFoods = [...this.state.foods, newFood];
    newFoods.sort((a, b) => (a.name > b.name ? 1 : -1));
    this.setState({
      foods: newFoods,
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <AddFoods addfood={this.addFoodHandler} />
          </Col>
        </Row>
        <Row>
          <Col>
            <FoodsList foods={this.state.foods} deleteFoodHandler={this.deleteFoodHandler} />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default FoodsPage;
