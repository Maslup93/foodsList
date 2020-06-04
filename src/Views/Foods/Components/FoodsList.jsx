import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Accordion, Button, Card, Table } from 'react-bootstrap';
import Foods from './Foods';

class FoodsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingList: true,
    };
  }

  generateFood = () => {
    if (this.props.foods.length === 0) {
      return 'Add foods using the form above!';
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
          {this.props.foods.map((food, index) => {
            return (
              <Foods
                click={() => this.props.deleteFoodHandler(food.id)}
                name={food.name}
                key={food.id}
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
        <Accordion defaultActiveKey="foodsList">
          <Card>
            <Card.Header>
              <Accordion.Toggle
                onClick={this.toggleShowList}
                as={Button}
                variant="secondary"
                eventKey="foodsList"
              >
                {this.state.showingList ? 'Hide Food' : 'Show Food'}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="foodsList">
              <Card.Body>{this.generateFood()}</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

FoodsList.propTypes = {
  foods: PropTypes.arrayOf(PropTypes.element).isRequired,
  deleteFoodHandler: PropTypes.func.isRequired,
};

export default FoodsList;
