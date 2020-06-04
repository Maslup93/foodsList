import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Accordion, Button } from 'react-bootstrap';
import milanesa from '../images/milanesa.jpg';

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingList: true,
    };
  }

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
      <div style={{ paddingTop: 30, paddingLeft: 30 }}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={milanesa} />
          <Card.Body>
            <Card.Title>Milanesa</Card.Title>
            <Card.Text>El gallego un poroto.</Card.Text>
          </Card.Body>
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  onClick={this.toggleShowList}
                  as={Button}
                  variant="link"
                  eventKey="0"
                >
                  {this.state.showingList ? 'Hide Ingredients' : 'Show Ingredients'}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>carnecita</ListGroupItem>
                    <ListGroupItem>pancito rallado</ListGroupItem>
                    <ListGroupItem>ajito</ListGroupItem>
                    <ListGroupItem>huevito</ListGroupItem>
                    <ListGroupItem>perejilcito</ListGroupItem>
                    <ListGroupItem>aceitito calentito</ListGroupItem>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Card>
      </div>
    );
  }
}
export default Recipes;
