import React from "react";
import Addnewtask from "../components/Addnewtask";
import Header from "../components/Header";

function Index() {
  return (
    <div className="h-screen w-[100%] flex items-center justify-center absolute">
      <Header />
      <div className="h-[80%] w-[93%] flex items-center justify-center mt-20 rounded-lg bg-[#EEEEEE]">
        <div className="h-[90%] w-[20%] bg-[#D9D9D9] rounded-lg mr-3 flex items-center justify-start flex-col">
          <h1 className="h-[38px] w-[100%] flex items-center justify-start pl-6 box-border text-lg font-semibold font-mono text-[#FF0101] border-b-[1px] border-[#B9B9B9]">
            Apps
          </h1>
          <Addnewtask />
        </div>
        <div className="h-[90%] w-[75%] bg-[#D9D9D9] rounded-lg flex items-center justify-center">
          Select any app
        </div>
      </div>
    </div>
  );
}

export default Index;
