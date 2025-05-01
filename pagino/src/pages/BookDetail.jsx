import React, { useState } from "react";
import { useParams } from "react-router-dom";
import books from "../data/books";
import { Container, Card } from "react-bootstrap";
import ReviewForm from "../components/ReviewForm";

export default function BookDetail() {
  const { id } = useParams();
  const book = books.find((b) => b.id === Number(id));
  const [reviews, setReviews] = useState(book.reviews);

  const handleAddReview = (reviewText) => {
    setReviews([{ text: reviewText }, ...reviews]);
  };

  return (
    <Container className="my-5">
      {/* Centered and larger card */}
      <div className="d-flex justify-content-center">
        <Card style={{ width: "100%", maxWidth: "700px", }} className="mb-4 shadow">
          <Card.Img variant="top" src={book.image} style={{ height: "100%", objectFit: "cover" }} />
          <Card.Body>
            <Card.Title className="fs-2">{book.title}</Card.Title>
            <Card.Subtitle className="mb-2 ">{book.author}</Card.Subtitle>
            <Card.Text>{book.description}</Card.Text>
          </Card.Body>
        </Card>
      </div>

      {/* Review Form */}
      <div className="d-flex justify-content-center">
        <div style={{ width: "100%", maxWidth: "700px" }}>
          <ReviewForm onAddReview={handleAddReview} />

          <h4 className="mt-4">Reviews</h4>
          {reviews.length > 0 ? (
            reviews.map((rev, index) => (
              <Card key={index} className="mb-2">
                <Card.Body>{rev.text}</Card.Body>
              </Card>
            ))
          ) : (
            <p>No reviews yet. Be the first to review!</p>
          )}
        </div>
      </div>
    </Container>
  );
}
