import React from "react";
import Navbar from "./Navbar";
import Time from "./Timer";

const Clocks = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="w-2/3 mx-auto min-h-screen">
        <Navbar />
        {/* <Clock /> */}
        <Time />
      </div>
    </div>
  );
};

export default Clocks;
