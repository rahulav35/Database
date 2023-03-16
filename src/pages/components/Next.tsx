import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function Next() {
  return (
    <div className="h-[40px] w-[140px] flex justify-center items-center ml-[520px]">
      <button className="h-[40px] w-[140px] bg-[#FF0000] text-sm text-white flex justify-evenly items-center rounded-lg">
        Next
        <AiOutlineArrowRight size={30} color="[#ffffff]" />
      </button>
    </div>
  );
}

export default Next;
