import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { Button } from "@material-tailwind/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import Error from "../Error/Error";
import {
  filterProducts,
  filterGender,
  sortByPrice,
  filterByColor,
  filterBySize,
} from "../../features/slideSlicer/productSlice";

const FilteredProducts = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  const error = useSelector((state) => state.products.error);
  const { type } = useParams();
  const navigate = useNavigate();
  const genderButtons = ["male", "female"];
  const colorButtons = [
    "red",
    "green",
    "purple",
    "yellow",
    "orange",
    "blue",
    "black",
    "brown",
  ];
  const sizeButtons = ["S", "M", "L", "XL"];
  const dispatch = useDispatch();

  return (
    <div className="">
      <div className="pt-16">
        <div className="pl-8">
          <h1 className="text-gray-600 text-4xl font-inter font-bold tracking-normal leading-none">
            <span>{type}</span>
            <Button
              color="gray"
              size="sm"
              variant="outlined"
              ripple={true}
              className=" ml-56 text-black md:hidden hover:bg-gray-300 duration-300 ease-in-out mr-4"
              onClick={() => dispatch(filterProducts(type))}
              >
              Clear Filter
            </Button>
          </h1>
          <button
                class="mt-2 hover:scale-95 flex items-center rounded-md bg-gradient-to-tr from-blue-700 to-blue-300 py-2 px-4 text-center text-xs font-semibold text-white shadow-md"
                onClick={() => navigate('/')}
              >
                <span className="flex items-center">
                  <AiOutlineArrowLeft className="mr-2" />
                  Go Back
                </span>
              </button>
          <div className="flex items-center justify-between py-8 ">
            <div className="flex items-center">
              {genderButtons.map((item, index) => {
                return (
                  <div key={index}>
                    <Button
                      color="gray"
                      size="sm"
                      variant="outlined"
                      ripple={true}
                      className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                      onClick={() => dispatch(filterGender(item))}
                    >
                      {item}
                    </Button>
                  </div>
                );
              })}
              <Button
                color="gray"
                size="sm"
                variant="outlined"
                ripple={true}
                className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                onClick={() => dispatch(sortByPrice())}
              >
                Price
              </Button>
              <Menu>
                <MenuHandler>
                  <Button
                    color="gray"
                    size="sm"
                    variant="outlined"
                    ripple={true}
                    className="text-black hidden lg:block hover:bg-gray-300 duration-300 ease-in-out mr-4"
                  >
                    Color
                  </Button>
                </MenuHandler>
                <MenuList>
                  {colorButtons.map((item, index) => {
                    return (
                      <MenuItem
                        style={{ color: item }}
                        key={index}
                        onClick={() => dispatch(filterByColor(item))}
                      >
                        {item}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
              <Menu>
                <MenuHandler>
                  <Button
                    disabled={type === "Bags" || type === "Shoes"}
                    color="gray"
                    size="sm"
                    variant="outlined"
                    ripple={true}
                    className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                  >
                    Size
                  </Button>
                </MenuHandler>
                <MenuList>
                  {sizeButtons.map((item, index) => {
                    return (
                      <MenuItem
                        key={index}
                        onClick={() => dispatch(filterBySize(item))}
                      >
                        {item}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
            </div>
            <div className="pr-14">
              <Button
                color="gray"
                size="md"
                variant="outlined"
                ripple={true}
                className=" text-black hidden lg:block hover:bg-gray-300 duration-300 ease-in-out mr-4"
                onClick={() => dispatch(filterProducts(type))}
              >
                Clear Filter
              </Button>
            </div>
          </div>
        </div>
        {error ? (
          <Error></Error>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center py-4 md:py-8 gap-4 md:gap-12">
            {products
              .filter((product) => product.type === type)
              .map((product, index) => {
                return (
                  <div key={index} className="">
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      text={product.text}
                      img={product.img}
                      price={product.price}
                      colors={product.color}
                    ></ProductCard>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilteredProducts;
