import React from "react";
import logo from "../logo.png";
import clothes from "../../assets/Images1/co.jpg";
import { useNavigate } from "react-router";

const Footer = () => {
  const year = new Date().getFullYear();
  const navigate = useNavigate();
  return (
    <>
  <div>
  <div className=" bg-black animate-pulse hover:animate-none hover:cursor-pre mb-8 p-2 w-[70%] mx-auto rounded-md">
  <div className="bg-black p-8 md:p-6 sm:p-4 w-full md:w-3/4 sm:w-5/6 mx-auto rounded-md">
  <h2 className="text-white text-4xl md:text-3xl sm:text-2xl text-center font-bold">
    SUMMER T-Shirt SALE
    <span className="text-red-500 text-6xl md:text-5xl sm:text-4xl"> 30%</span>
  </h2>
</div>

      </div>
      <div className="mb-20 flex justify-center items-center py-4">
        <img
          className="h-[300px] hover:cursor-pointer hover:scale-105 w-full sm:h-[600px] sm:w-[70%] rounded-md shadow-lg shadow-gray-600"
          onClick={() => navigate(`/filteredProducts/T-Shirts/`)}
          src={clothes}
          alt="clothes"
        />
      </div>
  </div>
    <div>
      <div className="flex items-center justify-center">
        <hr className="h-px w-4/5 bg-gray-400 opacity-50 outline-none border-none" />
      </div>
      <div className="flex items-center justify-around pt-4">
        <div>
          <img className="h-25" src={logo} alt="logo"></img>
        </div>
        <div>
          <p className="text-black font-semibold text-lg">
          ©  Copyright  {year} By <a href="https://www.linkedin.com/in/lakshaykhattar/" target="_blank" className="animate-pulse hover:border-b-2 border-black hover:animate-none">Lakshay Khattar</a>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;