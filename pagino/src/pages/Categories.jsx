import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import books from "../data/books";

export default function Categories() {
  // Get unique categories
  const categories = [...new Set(books.map(book => book.category))];

  return (
    <Container>
      <h2 className="mb-4">Categories</h2>
      <Row>
        {categories.map((category, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Card.Title>{category}</Card.Title>
                <Link to={`/category/${encodeURIComponent(category)}`} className="btn btn-primary mt-3">
                  View Books
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
