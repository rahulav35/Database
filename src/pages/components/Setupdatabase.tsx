import React from "react";
import Header from "./Header";
import Next from "./Next";
import Npm from "./Npm";
import Sidebarnewapp from "./Sidebarnewapp";

function Setupdatabase() {
  return (
    <div className="h-[70%] w-[70%] flex items-center justify-center absolute ">
      <Header />

      <div className="h-[100%] w-[100%] bg-[#494343d5]  flex flex-col items-start justify-start text-white text-xl font-semibold ">
        <h1 className="  text-white text-xl font-semibold ml-20 mt-10 ">
          Set up database
        </h1>
        <Npm />

        <Next />
      </div>
    </div>
  );
}

export default Setupdatabase;
