import React, { useState } from "react";
import Access from "./Access";
import Finishup from "./Finishup";
import Getcredential from "./Getcredential";
import Setupapp from "./Setupapp";
import Setupdatabase from "./Setupdatabase";
import Sidebarnewapp from "./Sidebarnewapp";

function Bgcomponent({ onClick }: { onClick: () => void }) {
  const [task, setTask] = useState("");

  function HandleClick() {
    if (task === "Setupapp") {
      return <Setupapp />;
    } else if (task === "Getcredential") {
      return <Getcredential />;
    } else if (task === "Access") {
      return <Access />;
    } else if (task === "Setupdatabase") {
      return <Setupdatabase />;
    } else if (task === "Finishup") {
      return <Finishup onClick={onClick} />;
    } else {
      return <Setupapp />;
    }
  }

  return (
    <div className="h-[83%] w-[95%] flex items-center justify-center  rounded-lg bg-[#0a0a0aa1] absolute z-100">
      <div className="h-[95%] w-[70%] flex items-center justify-center  mr-4">
        <HandleClick />
      </div>
      <div className="h-[90%] w-[20%] bg-[#1d1919bf]   flex  items-center justify-center flex-col text-center">
        <h1
          onClick={() => {
            setTask("Setupapp");
          }}
          className="text-[16px] tracking-wider font-semibold text-[#FF0000] my-3 "
        >
          set up app
        </h1>
        <h1
          onClick={() => setTask("Getcredential")}
          className="text-[16px] tracking-wider font-semibold text-[#ffffff] my-3"
        >
          Get credential
        </h1>
        <h1
          onClick={() => setTask("Access")}
          className="text-[16px] tracking-wider font-semibold text-[#ffffff] my-3 "
        >
          Access
        </h1>
        <h1
          onClick={() => setTask("Setupdatabase")}
          className="text-[16px] tracking-wider font-semibold text-[#ffffff] my-3"
        >
          set up database
        </h1>
        <h1
          onClick={() => setTask("Finishup")}
          className="text-[16px] tracking-wider font-semibold text-[#ffffff] my-3"
        >
          Finish up
        </h1>
      </div>
    </div>
  );
}

export default Bgcomponent;
