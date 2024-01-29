import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/index.tsx";

const MainLayout: React.FC = () => {
  return (
    <div className="canvas">
      <div className="wrapper">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
