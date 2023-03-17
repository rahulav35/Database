import React from "react";

import Header from "./components/Header";

function index() {
  return (
    <div className="h-screen w-[100%] flex  items-center justify-center absolute">
      <Header />
      <div className="h-[80%] w-[93%] flex items-center justify-center border-b-2 border-yellow-400 mt-20"></div>
    </div>
  );
}

export default index;
