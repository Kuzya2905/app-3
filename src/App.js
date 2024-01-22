import "./App.scss";
import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App" onClick={(e) => {}}>
      <div className="canvas">
        <div className="wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
