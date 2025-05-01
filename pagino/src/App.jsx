import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetail";
import Categories from "./pages/Categories";
import BooksByCategory from "./pages/BooksbyCategory";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <CustomNavbar />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/category/:category" element={<BooksByCategory />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
