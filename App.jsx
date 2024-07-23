import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import Home from "./pages/home";
import Book from "./pages/Book";
import Research from "./pages/Research";
import Archive from "./pages/Archive";
import Nopage from "./pages/nopage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <NextUIProvider>
      <Router>
        <Navbar />
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/book" element={<Book />} />
        <Route path="*" element={<Nopage />} />
        {/* ... */}
      </Router>
    </NextUIProvider>
  );
}

export default App;
