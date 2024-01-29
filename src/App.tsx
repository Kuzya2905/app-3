import "./App.scss";
import React from "react";
import Home from "./pages/Home.tsx";
import Cart from "./pages/Cart.tsx";
import Pizza from "./pages/Pizza.tsx";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";

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
