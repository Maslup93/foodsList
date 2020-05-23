import React, { Component } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import Product from './Product';
import AddProduct from './AddProduct';

class productList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      showProduct: false,
    };
  }

  componentDidMount() {
    console.log('component mounted!!!!');
  }

  componentDidUpdate() {
    console.log('component updated!');
  }

  // TO SHOW PRODUCT
  toggleProductHandler = () => {
    const doesShow = this.state.showProduct;
    this.setState({ showProduct: !doesShow });
  };

  //TO DELETE PRODUCT
  deleteFoodHandler = (id) => {
    const updatedProducts = this.state.products.filter((product) => product.id !== id);
    this.setState({ products: updatedProducts });
  };

  //TO ADD PRODUCT
  addFoodHandler = (productName) => {
    const newProduct = { name: productName, id: uuidv4() };
    const newProducts = [...this.state.products, newProduct];
    this.setState({
      products: newProducts,
    });
  };

  render() {
    let products = null;
    if (this.state.showProduct) {
      products = (
        <div>
          {this.state.products.map((productName) => {
            return (
              <Product
                click={() => this.deleteFoodHandler(productName.id)}
                pasta={productName.name}
                key={productName.id}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div>
        <AddProduct addProduct={this.addFoodHandler} />
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                onClick={this.toggleProductHandler}
                as={Button}
                variant="link"
                eventKey="0"
              >
                Show Food
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>{products}</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}
export default productList;
