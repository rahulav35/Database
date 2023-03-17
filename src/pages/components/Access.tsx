import React from "react";
import Domainaccess from "./Domainaccess";

import Networkaccess from "./Networkaccess";
import Next from "./Next";
import Sidebarnewapp from "./Sidebarnewapp";

function Access() {
  return (
    <div className="h-[70%] w-[70%] flex items-center justify-center absolute  ">
      <div className="h-[100%] w-[100%] bg-[#494343d5]  flex flex-col items-start justify-start text-white text-xl font-semibold ">
        <h1 className="  text-white text-xl font-semibold ml-20 mt-10 ">
          Access
        </h1>
        <Networkaccess />
        <Domainaccess />

        <Next />
      </div>
    </div>
  );
}

export default Access;
