import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-4">
      <Container className="text-center">
        &copy; {new Date().getFullYear()} Pagino. All rights reserved.
      </Container>
    </footer>
  );
}
