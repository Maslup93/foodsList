import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import DropdownButton from './DropdownButton';

class PopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: '',
    };
  }
  handleChange = (event) => {
    this.setState({ itemName: event.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.itemName);
    this.setState({ itemName: '' });
  };

  render() {
    return (
      <div>
        <Modal
          onHide={this.props.handleClose}
          show={this.props.show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Add Transaction</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <DropdownButton change={this.handleChange} />
          </Modal.Body>

          <Modal.Footer>
            <Button
              className="float-left"
              variant="primary"
              type="submit"
              size="sm"
              onClick={this.props.handleClose}
            >
              Cancel
            </Button>
            <Button
              onClick={this.handleSubmit}
              className="float-right"
              variant="primary"
              type="submit"
              size="sm"
            >
              {' '}
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

PopUp.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
};

PopUp.defaultProps = {
  show: false,
};

export default PopUp;
