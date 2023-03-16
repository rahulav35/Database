import React from "react";
import Header from "./Header";
import Sidebarnewapp from "./Sidebarnewapp";

function Finishup() {
  return (
    <div className="h-screen w-[100%] flex items-center justify-center absolute ">
      <Header />
      <div className="h-[83%] w-[95%] flex items-center justify-center mt-20 rounded-lg bg-[#0a0a0aa1]">
        <div className="h-[75%] w-[55%] bg-[#494343d5]  flex flex-col items-center justify-center text-white text-xl font-semibold ">
          <h1 className="  text-white text-3xl font-semibold font-serif -mt-32 ">
            Congratulations!!!!!!
          </h1>
          <h2 className=" text-white text-sm font-normal font-mono mt-3">
            App setup completed
          </h2>
          <button className="h-[40px] w-[140px] flex justify-center items-center mt-8  bg-[#FF0000] text-sm text-white rounded-lg">
            Close
          </button>
        </div>
        <Sidebarnewapp />
      </div>
    </div>
  );
}

export default Finishup;
