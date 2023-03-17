import React from "react";
import Access from "./components/Access";
import Bgcomponent from "./components/Bgcomponent";
import Finishup from "./components/Finishup";
import Getcredential from "./components/Getcredential";
import Header from "./components/Header";
import Setupapp from "./components/Setupapp";
import Setupdatabase from "./components/Setupdatabase";

function index() {
  return (
    <div className="h-screen w-[100%] flex  items-center justify-center absolute">
      <Header />
      <div className="h-[80%] w-[93%] flex items-center justify-center border-b-2 border-yellow-400 mt-20">
        <Bgcomponent />
      </div>
    </div>
  );
}

export default index;
