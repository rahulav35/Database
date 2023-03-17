import React from "react";

import Sidebarnewapp from "./Sidebarnewapp";

function Finishup() {
  return (
    <div className="h-[90%] w-[90%] flex items-center justify-center absolute ">
      <div className="h-[100%] w-[100%] bg-[#494343d5]  flex flex-col items-center justify-center text-white text-xl font-semibold ">
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
  );
}

export default Finishup;
