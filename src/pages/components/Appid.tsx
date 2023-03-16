import React from "react";
import { FiCopy } from "react-icons/fi";

function Appid() {
  return (
    <div className="h-[200px] w-[70%] flex flex-col items-start justify-evenly text-sm ml-20">
      <div className="h-[70px] w-[390px]  flex items-start justify-start flex-col text-sm text-white font-normal ">
        App id
        <div className="h-[60px] w-[390px] flex items-center justify-between ">
          <input
            className="h-[46px] w-[330px] bg-[#625a5a] p-2 box-border rounded-lg "
            type="text"
            placeholder="!"
          />
          <div className="h-[46px] w-[46px]  bg-[#625a5a] flex justify-center items-center rounded-lg ">
            <FiCopy size={32} color="[#3C8EF4]" />
          </div>
        </div>
      </div>
      <div className="h-[70px] w-[390px]  flex items-start justify-start flex-col text-sm text-white font-normal mt-2">
        Secret key
        <div className="h-[60px] w-[390px] flex items-center justify-between ">
          <input
            className="h-[46px] w-[330px] bg-[#625a5a] p-2 box-border rounded-lg "
            type="text"
            placeholder="!"
          />
          <div className="h-[46px] w-[46px]  bg-[#625a5a] flex justify-center items-center rounded-lg  ">
            <FiCopy size={32} color="[#3C8EF4]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appid;
