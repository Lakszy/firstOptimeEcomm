import React, { useState } from "react";
import logo from "../logo.png";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Navbar = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const user = useSelector((state) => state.user.user);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const navigate = useNavigate();
  return (
    <>
      <div className=" flex justify-between items-center w-full px-12 lg:py-0 ">
        <div>
          <img
            className="flex -ml-6 h-30 w-full hover:cursor-pointer"
            src={logo}
            onClick={() => navigate("/")}
            alt="store"
          ></img>
        </div>
        <div className="flex flex-row items-center gap-10">
          <div className= "hidden  md:flex flex-row items-center ">
            <p className=" font-inter font-semibold text-lg tracking-normal leading-none text-center mr-2">
              Made With
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="red"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="red"
              className="w-6 h-6 animate-bounce hover:animate-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.25 2 5.42 4.42 3 7.25 3c1.31 0 2.59.5 3.54 1.46L12 6.67l1.21-1.21C13.66 3.5 14.94 3 16.25 3 19.08 3 21.5 5.42 21.5 8.25c0 4.03-3.4 7.11-8.55 11.79L12 21.35z"
              />
            </svg>
          </div>
          <div
            className="flex flex-row items-center cursor-pointer gap-2"
            onClick={handleOpen}
          >
            {totalAmount > 0 ? (
              <span className="rounded-full bg-gray-300 px-2 font-inter text-sm mr-1 ">
                {totalAmount}
              </span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="1"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            )}
            <p className="text-base font-semibold tracking-normal leading-none text-center ">
              Shopping bag
            </p>
            <div>
              {open && <Cart openModal={open} setOpen={setOpen}></Cart>}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black p-4 w-full flex items-center justify-center mx-auto "></div>
    </>
  );
};

export default Navbar;
