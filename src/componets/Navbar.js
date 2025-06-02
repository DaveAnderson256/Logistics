import React, {useContext} from 'react'
import { Navbar, Nav, Container, Form, FormControl, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProductContext } from './ProductContext';


const NavBar = () =>{
  const {products, setProducts} = useContext(ProductContext);
  return (
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Inventory Management App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">            
                  <Badge className="mt-2" bg="primary">Products In stock: {products.length}</Badge> // Display the number of products in stock
              </Nav>
              <Form className="d-flex">
                  <Link to="/addproduct" className="btn btn-primary btn-sm me-4">Add Product</Link>
                  <FormControl type="text" placeholder="Search" className="me-2" />
                  <Button type="submit" variant="outline-primary">Search</Button>
              </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavBar
