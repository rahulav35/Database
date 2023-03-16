import React from "react";
import Header from "./Header";
import Next from "./Next";
import Sidebarnewapp from "./Sidebarnewapp";

function Access() {
  return (
    <div className="h-screen w-[100%] flex items-center justify-center absolute ">
      <Header />
      <div className="h-[83%] w-[95%] flex items-center justify-center mt-20 rounded-lg bg-[#0a0a0aa1]">
        <div className="h-[75%] w-[55%] bg-[#494343d5]  flex flex-col items-start justify-start text-white text-xl font-semibold ml-24">
          <h1 className="  text-white text-xl font-semibold ml-20 mt-10 ">
            Access
          </h1>

          <Next />
        </div>
        <Sidebarnewapp />
      </div>
    </div>
  );
}

export default Access;
