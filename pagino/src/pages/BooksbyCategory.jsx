import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import books from "../data/books";

export default function BooksByCategory() {
  const { category } = useParams();
  const filteredBooks = books.filter(book => book.category === category);

  return (
    <Container>
      <h2 className="mb-4">{category} Books</h2>
      <Row>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <Col key={book.id} md={4} lg={3} className="mb-4 d-flex">
              <Card className="flex-fill h-100 shadow-sm">
                <Card.Img variant="top" src={book.image} style={{ height: "200px", objectFit: "cover" }} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text className="flex-grow-1">Author: {book.author}</Card.Text>
                  <Link to={`/book/${book.id}`} className="btn btn-primary mt-auto">
                    View Details
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No books available in this category.</p>
        )}
      </Row>
    </Container>
  );
}
