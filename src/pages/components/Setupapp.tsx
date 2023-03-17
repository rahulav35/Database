import React from "react";
import Createadmin from "./Createadmin";
import Header from "./Header";
import Next from "./Next";
import Sidebarnewapp from "./Sidebarnewapp";

function Setupapp() {
  return (
    <div className="h-[70%] w-[70%] flex items-center justify-center absolute ">
      <Header />

      <div className="h-[100%] w-[100%] bg-[#494343d5]  flex flex-col items-start justify-evenly text-white text-xl font-semibold ">
        <h1 className="  text-white text-xl font-semibold ml-20 ">
          {" "}
          Set up your app
        </h1>
        <div className="h-[70px] w-[300px]  flex items-start justify-start flex-col text-sm text-white font-normal ml-20 ">
          App Name
          <input
            className="h-[40px] w-[270px] bg-[#737373] p-2 box-border rounded-lg mt-2"
            type="text"
            placeholder="!"
          />
        </div>
        <Createadmin />
        <Next />
      </div>
    </div>
  );
}

export default Setupapp;
