import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Accordion, Button } from 'react-bootstrap';
import fideos from '../images/fideos.jpg';

class Fideos extends Component {
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
          <Card.Img variant="top" src={fideos} />
          <Card.Body>
            <Card.Title>Spaghetti</Card.Title>
            <Card.Text>mansos fideos.</Card.Text>
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
                    <ListGroupItem>fideitos(duh)</ListGroupItem>
                    <ListGroupItem>salsita bolognesa</ListGroupItem>
                    <ListGroupItem>quesito de rallar</ListGroupItem>
                    <ListGroupItem>caldito de verdura</ListGroupItem>
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
export default Fideos;
