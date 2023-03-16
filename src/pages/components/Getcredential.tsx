import React from "react";
import Appid from "./Appid";
import Header from "./Header";
import Next from "./Next";
import Sidebarnewapp from "./Sidebarnewapp";

function Getcredential() {
  return (
    <div className="h-screen w-[100%] flex items-center justify-center absolute ">
      <Header />
      <div className="h-[83%] w-[95%] flex items-center justify-center mt-20 rounded-lg bg-[#0a0a0aa1]">
        <div className="h-[75%] w-[55%] bg-[#494343d5]  flex flex-col items-start justify-evenly text-white text-xl font-semibold ml-24">
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
    </div>
  );
}

export default Getcredential;
