import React from "react";
import { FiCopy } from "react-icons/fi";

function Npm() {
  return (
    <div className="h-[50%] w-[460px]  flex items-start justify-start flex-col text-xs text-white font-normal mt-7 ml-20 rel ">
      install this npm package in your project directory
      <div className="h-[70px] w-[220px] flex items-center justify-between mb-4  ">
        <h1 className="h-[45px] w-[160px] bg-[#625a5a] p-2 box-border rounded-lg  flex items-center justify-center">
          npm i ipfsdb
        </h1>

        <div className="h-[46px] w-[50px]  bg-[#625a5a] flex justify-center items-center rounded-lg  ">
          <FiCopy size={32} color="[#3C8EF4]" />
        </div>
      </div>
      create a file db.js or db.ts and paste this code
      <div className="h-[300px] w-[400px] flex items-center justify-between relative  ">
        <h1 className="h-[170px] w-[400px] bg-[#625a5a] p-2 box-border rounded-lg  flex items-center justify-center">
          npm i ipfsdb
        </h1>

        <div className="h-[46px] w-[50px]  bg-[#868383] flex justify-center items-center rounded-lg absolute top-3 right-3 ">
          <FiCopy size={32} color="[#3C8EF4]" />
        </div>
      </div>
    </div>
  );
}

export default Npm;
