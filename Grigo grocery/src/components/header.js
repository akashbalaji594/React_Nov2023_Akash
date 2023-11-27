import React from 'react';
import logo from './images/logo.jpg'
import { Navbar, Container, Nav, InputGroup, FormControl, Button } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons'
import { Person, Bag,Heart } from 'react-bootstrap-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {
  return (
    <div>
    <Navbar collapseOnSelect expand="md" bg="black" variant="dark">
      <Container>
        <Navbar.Brand href="/"><img src={logo} style={{width:"80px",height:"80px"}}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contactus">Contact</Nav.Link>
            <Nav.Link href="/aboutus">About</Nav.Link>
            
            <Nav.Link> <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        By Category
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/fruits">Fruits</Dropdown.Item>
        <Dropdown.Item href="#/vegetables">Vegetables</Dropdown.Item>
        <Dropdown.Item href="#/dairy">Dairy Products</Dropdown.Item>
        {/* Add more categories as needed */}
      </Dropdown.Menu>
    </Dropdown></Nav.Link>
            {/* Add more Nav.Link components for additional navigation items */}
          </Nav>
          <Nav>
            <InputGroup>
              <FormControl
                type="text"
                placeholder="Search for Products..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                <Search />
              </Button>
            </InputGroup>
          </Nav>
          <Nav>
            <Button variant="link" className="me-2" href='/wishlist'>
              <Heart size={22} color='green'/>
            </Button>
            <Button variant="link"   className="me-2" href='/Loginpg'>
              <Person size={24} color='green' />
            </Button>
            <Button variant="link" className="me-2" href='/cart'>
              <Bag size={24} color='green'/>
            </Button>
          </Nav>

        </Navbar.Collapse>
      </Container>

    </Navbar>    
</div>
  );
};

export default Header;
