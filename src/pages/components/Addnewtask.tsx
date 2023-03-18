import React, { useState } from "react";
import { BiAddToQueue } from "react-icons/bi";

type props = { onClick: () => void };

function Addnewtask({ onClick }: props) {
  return (
    <div
      onClick={onClick}
      className="min-h-[45px] w-[85%] rounded-lg border-[1px] border-black flex justify-start items-center mt-3"
    >
      <h1 className="text-sm text-black mx-5">New App</h1>
      <BiAddToQueue size={22} className="mx-2" />
    </div>
  );
}

export default Addnewtask;
