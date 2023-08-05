import React from "react";
import logo from "../assets/logo.png";
import { BsMouse } from "react-icons/bs";

const Other = () => {
  return (
    <>
      <div className="cursor"></div>
      <a href="/" className="logo">
        <img src={logo} alt="Logo" cursor-pointer={"true"} />
      </a>
      <a href="/franchise" className="franchiseBtn" cursor-pointer={"true"}>
        GET A FRANCHISE
      </a>

      <BsMouse className="scrollBtn" cursor-pointer={"true"} />
    </>
  );
};

export default Other;
