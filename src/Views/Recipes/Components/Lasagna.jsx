import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Accordion, Button } from 'react-bootstrap';
import lasagna from '../images/lasagna.jpg';

class Lasagna extends Component {
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
          <Card.Img variant="top" src={lasagna} />
          <Card.Body>
            <Card.Title>Lasagna</Card.Title>
            <Card.Text>Una lasagna mas rica que la concha de su madre.</Card.Text>
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
                    <ListGroupItem>Masita de pasta</ListGroupItem>
                    <ListGroupItem>Jamoncito</ListGroupItem>
                    <ListGroupItem>Quesito</ListGroupItem>
                    <ListGroupItem>salsita bolognesa</ListGroupItem>
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
export default Lasagna;
