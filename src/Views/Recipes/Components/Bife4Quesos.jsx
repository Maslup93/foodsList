import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Accordion, Button } from 'react-bootstrap';
import bife from '../images/bife.jpg';

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
          <Card.Img variant="top" src={bife} />
          <Card.Body>
            <Card.Title>Bife con salsa 4 quesos</Card.Title>
            <Card.Text>
              Te la queres garchar? hacele esto, no se va a resistir.. (si se resiste le pones una
              cucharadita o cinco de whisky)
            </Card.Text>
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
                    <ListGroupItem>Bifecito de lomo</ListGroupItem>
                    <ListGroupItem>Cremita de leche</ListGroupItem>
                    <ListGroupItem>Quesito azul</ListGroupItem>
                    <ListGroupItem>Quesito tybo</ListGroupItem>
                    <ListGroupItem>Quesito provolone</ListGroupItem>
                    <ListGroupItem>Quesito cremoso</ListGroupItem>
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
