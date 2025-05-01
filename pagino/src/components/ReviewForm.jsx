import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function ReviewForm({ onAddReview }) {
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.trim()) {
      onAddReview(review);
      setReview("");
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="my-4">
      <Form.Group>
        <Form.Label>Leave a Review</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review here"
        />
      </Form.Group>
      <Button type="submit" className="mt-2" variant="success">Submit Review</Button>
    </Form>
  );
}
