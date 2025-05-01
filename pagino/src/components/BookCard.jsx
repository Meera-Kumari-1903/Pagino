import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={book.image} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Subtitle className="mb-2 ">{book.author}</Card.Subtitle>
        <Card.Text>{book.category}</Card.Text>
        <Button as={Link} to={`/book/${book.id}`} variant="primary">
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
}
