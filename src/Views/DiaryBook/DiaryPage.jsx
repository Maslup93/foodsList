import React, { Component, Fragment } from 'react';
import { Row, Container, Col, Button } from 'react-bootstrap';
import ItemList from './Components/ItemList';
import PopUp from './Components/PopUp';

class DiaryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      modalShow: false,
    };
  }

  //TO CLOSE POPUP

  closePopupHandler = () => {
    this.setState({ modalShow: false });
  };
  //TO POOPUP THE POOPUP

  openPopupHandler = () => {
    this.setState({ modalShow: true });
  };

  displayCurrentDate = () => {
    const today = new Date();

    const date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    return date;
  };

  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  alignItems: 'center',
                }}
              >
                <p style={{ margin: 0, fontWeight: 'bold' }}>Date: {this.displayCurrentDate()}</p>
                <div>
                  <Button
                    className="float-right"
                    variant="primary"
                    type="submit"
                    size="sm"
                    onClick={this.openPopupHandler}
                  >
                    Add Transaction
                  </Button>
                  <Button className="float-right" variant="success" type="submit" size="sm">
                    Close Day
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <ItemList item={this.state.item} deleteItemHandler={this.deleteItemHandler} />
            </Col>
          </Row>
        </Container>
        <PopUp show={this.state.modalShow} handleClose={this.closePopupHandler} />
      </Fragment>
    );
  }
}
export default DiaryPage;
