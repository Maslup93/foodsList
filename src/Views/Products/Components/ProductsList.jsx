import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Accordion, Button, Card, Table } from 'react-bootstrap';
import Product from './Product';

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingList: true,
    };
  }

  generateProducts = () => {
    if (this.props.products.length === 0) {
      return 'Add products using the form above!';
    }
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.products.map((product, index) => {
            return (
              <Product
                click={() => this.props.deleteFoodHandler(product.id)}
                name={product.name}
                key={product.id}
                position={index + 1}
              />
            );
          })}
        </tbody>
      </Table>
    );
  };

  toggleShowList = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        showingList: !prevState.showingList,
      };
    });
  };

  render() {
    return (
      <div style={{ marginTop: 15 }}>
        <Accordion defaultActiveKey="productsList">
          <Card>
            <Card.Header>
              <Accordion.Toggle
                onClick={this.toggleShowList}
                as={Button}
                variant="secondary"
                eventKey="productsList"
              >
                {this.state.showingList ? 'Hide Products' : 'Show Products'}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="productsList">
              <Card.Body>{this.generateProducts()}</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.element).isRequired,
  deleteFoodHandler: PropTypes.func.isRequired,
};

export default ProductsList;
