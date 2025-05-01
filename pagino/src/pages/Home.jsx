import React from "react";
import { Container, Carousel, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import books from "../data/books";
import carouselImages from "../data/carouselData"; // import carousel data

export default function Home() {
  const latestBooks = books.slice(-8).reverse();

  return (
    <Container>
      <h1 className="text-center my-4">Welcome to the Book Store</h1>

      {/* Carousel Section (Dynamically Mapped) */}
      <Carousel fade className="mb-5">
        {carouselImages.map((slide) => (
          <Carousel.Item key={slide.id}>
            <img  
            className="d-block w-100 carousel-img" 
            src={slide.src} 
            alt={slide.title} 
            style={{ height: "450px", objectFit: "cover" }} 
            />
            <Carousel.Caption>
              <h3>{slide.title}</h3>
              <p>{slide.caption}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Latest Books Section */}
      <h2 className="mb-4">Latest Books</h2>
      <Row>
  {latestBooks.map((book) => (
    <Col md={4} lg={3} key={book.id} className="mb-4 d-flex">
      <Card className="flex-fill h-100">
        <Card.Img variant="top" src={book.image} style={{ height: "200px", objectFit: "cover" }} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{book.title}</Card.Title>
          <Card.Subtitle className="mb-2">{book.author}</Card.Subtitle>
          <Card.Text className="flex-grow-1">{book.description.slice(0, 60)}...</Card.Text>
          <Button as={Link} to={`/book/${book.id}`} variant="primary" className="mt-auto">
            View Book
          </Button>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

    </Container>
  );
}
