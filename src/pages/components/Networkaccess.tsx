import React from "react";

function Networkaccess() {
  return (
    <div className="h-[70px] w-[460px]  flex items-start justify-start flex-col text-sm text-white font-normal mt-7 ml-20  ">
      Network Access
      <div className="h-[70px] w-[460px] flex items-center justify-between mt-2 ">
        <div className="min-h-[45px]  w-[330px] rounded-lg flex flex-col justify-evenly items-center mt-2 ">
          <input
            className="h-[45px] w-[330px] bg-[#625a5a] p-2 box-border rounded-lg mb-1 "
            type="text"
            placeholder="!"
          />
        </div>

        <button className="h-[45px] w-[90px]  bg-[#625a5a] flex justify-center items-center rounded-lg ">
          Add
        </button>
      </div>
    </div>
  );
}

export default Networkaccess;
