import React, { Component, Fragment } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import AddProduct from './Components/AddProduct';
import ProductsList from './Components/ProductsList';

class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      // showProduct: false,
    };
  }

  componentDidMount() {
    console.log('component mounted!!!!');
  }

  componentDidUpdate() {
    console.log('component updated!');
  }

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
    return (
      <Container>
        <Row>
          <Col>
            <AddProduct addProduct={this.addFoodHandler} />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProductsList
              products={this.state.products}
              deleteFoodHandler={this.deleteFoodHandler}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default ProductsPage;
