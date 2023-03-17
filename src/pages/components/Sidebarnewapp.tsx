import { type } from "os";
import React from "react";
type props = {
  onClick: () => void;
};

function Sidebarnewapp({ onClick }: props) {
  return (
    <div className="h-[90%] w-[20%] bg-[#1d1919bf]   flex  items-center justify-center flex-col text-center">
      <h1
        onClick={onClick}
        className="text-[16px] tracking-wider font-semibold text-[#FF0000] my-3 "
      >
        set up app
      </h1>
      <h1
        onClick={onClick}
        className="text-[16px] tracking-wider font-semibold text-[#ffffff] my-3"
      >
        Get credential
      </h1>
      <h1
        onClick={onClick}
        className="text-[16px] tracking-wider font-semibold text-[#ffffff] my-3 "
      >
        Access
      </h1>
      <h1
        onClick={onClick}
        className="text-[16px] tracking-wider font-semibold text-[#ffffff] my-3"
      >
        set up database
      </h1>
      <h1
        onClick={onClick}
        className="text-[16px] tracking-wider font-semibold text-[#ffffff] my-3"
      >
        Finish up
      </h1>
    </div>
  );
}

export default Sidebarnewapp;
