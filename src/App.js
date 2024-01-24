import "./App.scss";
import React from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="*" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pizza/:id" element={<Pizza />} />
      </Route>
    </Routes>
  );
}

export default App;
