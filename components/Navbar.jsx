import React from "react";
import { IoMdSettings } from "react-icons/io";
import { RiFocus3Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="pt-5 pb-5 flex justify-center text-white w-11/12 mx-auto bg-red-800 mt-4">
      <div className="logo">
        <div className="logo flex justify-center ">
          <RiFocus3Line className="text-4xl" />
          <div className="pl-3 text-3xl">TimeX</div>
        </div>
      </div>
      <div className="">{/* <IoMdSettings /> */}</div>
    </div>
  );
};

export default Navbar;
