import React from "react";

function Header() {
  return (
    <div className="h-[70px] w-[100%] flex items-center justify-between  fixed top-0 left-0 ">
      <div className="h-[60px] w-[80px] ml-10 flex items-center justify-center">
        LOGO
      </div>
      <button className="h-[40px] w-[150px] border-[1px] border-amber-700 rounded-xl font-mono font-semibold mr-10">
        Connect Wallet
      </button>
    </div>
  );
}

export default Header;
