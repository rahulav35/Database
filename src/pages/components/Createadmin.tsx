import React from "react";

function Createadmin() {
  return (
    <div className="h-[110px] w-[90%] flex flex-col items-start justify-around text-sm ml-20  ">
      <h1 className="text-white text-[15px] font-semibold mb-2 ">
        Create Admin User
      </h1>
      <div className="h-[70px] w-[90%] flex items-center justify-between">
        <div className="h-[70px] w-[300px]  flex items-start justify-start flex-col text-sm text-white font-normal ">
          Name
          <input
            className="h-[40px] w-[270px] bg-[#737373] p-2 box-border rounded-lg mt-2"
            type="text"
            placeholder="!"
          />
        </div>
        <div className="h-[70px] w-[300px]  flex items-start justify-start flex-col text-sm text-white font-normal ml-5">
          Password
          <input
            className="h-[40px] w-[270px] bg-[#737373] p-2 box-border rounded-lg mt-2"
            type="text"
            placeholder="!"
          />
        </div>
      </div>
    </div>
  );
}

export default Createadmin;
