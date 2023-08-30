import React from "react";
import { Link } from "react-router-dom";
import viteLogo from "../../../public/vite.svg";

const Brand = () => {
  return (
    <>
      <Link to={"/"} className="flex items-center justify-start">
        <img src={viteLogo} />
        <span className="flex items-center pl-2 font-bold">Red Social</span>
      </Link>
    </>
  );
};

export default Brand;
