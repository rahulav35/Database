import React from "react";

import Header from "./components/Header";

function index() {
  return (
    <div className="h-screen w-[100%] flex  items-center justify-center absolute">
      <Header />
      <div className="h-[80%] w-[93%] flex items-center justify-center border-t-2 border-fuchsia-600 border-l-2 border-l-lime-500 mt-20 rounded-xl"></div>
    </div>
  );
}

export default index;
