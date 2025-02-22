import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Collection from "./pages/Collection";
import Blogs from "./pages/Blogs";
import Pages from "./pages/Pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/pages" element={<Pages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
