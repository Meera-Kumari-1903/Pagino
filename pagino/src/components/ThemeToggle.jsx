import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme from body class
    const bodyClass = document.body.classList.contains("dark-mode");
    setIsDark(bodyClass);
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
    setIsDark((prev) => !prev);
  };

  return (
    <Button variant={isDark ? "dark" : "light"} onClick={toggleTheme} className="ms-3">
      {isDark ? "Light" : "Dark"}
    </Button>
  );
}

