import React from "react";
import Appid from "./Appid";
import Header from "./Header";
import Next from "./Next";
import Sidebarnewapp from "./Sidebarnewapp";

function Getcredential() {
  return (
    <div className="h-[90%] w-[90%] flex items-center justify-center absolute ">
      <div className="h-[100%] w-[100%] bg-[#494343d5]  flex flex-col items-start justify-evenly text-white text-xl font-semibold ">
        <h1 className="  text-white text-xl font-semibold ml-20 ">
          Credentials
        </h1>
        <Appid />
        <h1 className="text-sm text-white ml-20 -mt-5 font-normal ">
          Do not share your App id and Secret key to anyone
        </h1>
        <Next />
      </div>
      <Sidebarnewapp />
    </div>
  );
}

export default Getcredential;
