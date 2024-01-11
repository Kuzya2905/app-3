import "./App.scss";
import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import AppContext from "./Context";

function App() {
  const [itemsPizza, setItemsPizza] = React.useState([]);
  const [visibleItems, setVisibleItems] = React.useState([]);

  const [valueSearch, setValueSearch] = React.useState("");

  return (
    <div className="App">
      <div className="canvas">
        <div className="wrapper">
          <AppContext.Provider
            value={{
              itemsPizza,
              setItemsPizza,
              valueSearch,
              setValueSearch,
              visibleItems,
              setVisibleItems,
            }}
          >
            <Header />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
            </Routes>
          </AppContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
