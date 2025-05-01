import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import books from "../data/books";

export default function CustomNavbar() {
  const categories = [...new Set(books.map(book => book.category))];

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">Pagino</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Categories" id="categories-dropdown">
              <NavDropdown.Item as={Link} to="/categories">All Categories</NavDropdown.Item>
              <NavDropdown.Divider />
              {categories.map((category, index) => (
                <NavDropdown.Item
                  key={index}
                  as={Link}
                  to={`/category/${encodeURIComponent(category)}`}
                >
                  {category}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <ThemeToggle />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
