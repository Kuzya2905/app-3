import "./App.scss";
import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import { AppContext } from "./Context";

function App() {
  const [itemsPizza, setItemsPizza] = React.useState([]);
  const [visibleItems, setVisibleItems] = React.useState([]);

  const [valueSearch, setValueSearch] = React.useState("");
  const [stateDropDown, setStateDropDown] = React.useState(false);
  return (
    <div className="App" onClick={(e) => {}}>
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
              stateDropDown,
              setStateDropDown,
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
