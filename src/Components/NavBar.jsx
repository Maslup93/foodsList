import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

const navBar = () => {
  return (
    <div>
      <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <ReactBootstrap.Navbar.Brand href="#home">Foods List</ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootstrap.Nav className="mr-auto">
            <ReactBootstrap.Nav.Link href="#features">Features</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href="#pricing">Pricing</ReactBootstrap.Nav.Link>
            <ReactBootstrap.NavDropdown title="More" id="collasible-nav-dropdown">
              <ReactBootstrap.NavDropdown.Item href="#action/3.1">
                Recipes
              </ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="#action/3.2">
                Products
              </ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="#action/3.3">
                Foods
              </ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Divider />
              <ReactBootstrap.NavDropdown.Item href="#action/3.4">
                Separated link
              </ReactBootstrap.NavDropdown.Item>
            </ReactBootstrap.NavDropdown>
          </ReactBootstrap.Nav>
          <ReactBootstrap.Nav>
            <ReactBootstrap.Nav.Link href="#deets">More deets</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link eventKey={2} href="#memes">
              Dank memes
            </ReactBootstrap.Nav.Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    </div>
  );
};
export default navBar;
