import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineArrowLeft } from "react-icons/ai";
import logo from "../logo.png";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Tooltip, Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/slideSlicer/cartSlice";

const SingleProduct = () => {
  const product = useSelector((state) => state.products.singleProduct);
  const productSize = product[0].size ? product[0].size[0] : "";
  const productColor = product[0].color[0];
  const [size, setSize] = useState(productSize);
  const [color, setColor] = useState(productColor);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  return (
    <div className="bg-stone-50">
      <div>
        <img
          onClick={() => navigate("/")}
          className="hidden md:block ml-3 h-29 w-50 hover:cursor-pointer"
          src={logo}
          alt="store"
        ></img>
      </div>
      {product
        .filter((product) => product.id === id)
        .map((item, index) => (
          <div
            key={index}
            className="  flex md:flex-row md:justify-items-center py-10 gap-10 flex-col"
          >
            <div className="md:pl-[20%] md:px-[10%] px-[16%] p-[1%] md:w-full">
              <img
                className="w-[100%] rounded-lg shadow-md"
                src={item.img}
                alt={item.name}
              />
            </div>

            <div className="px-[10%] md:pr-[10%] md:h-full md:px-[0%]">
              <button
                class="mb-10 md:mb-8 lg:ml-96 lg:mb-4 hover:scale-95 flex items-center rounded-md bg-gradient-to-tr from-blue-700 to-blue-300 py-2 px-4 text-center text-xs font-semibold text-white shadow-md"
                onClick={() => navigate(`/filteredProducts/${item.type}`)}
              >
                <span className="flex items-center">
                  <AiOutlineArrowLeft className="mr-2" />
                  Go Back
                </span>
              </button>

              <div className="h-[96%]">
                <h5 className="text-3xl font-sans font-bold tracking-tight leading-none pb-4 text-gray-800">
                  {item.name}
                </h5>

                <p className="text-purple-600 text-xl font-sans font-bold tracking-wide leading-none pb-4">
                  Save 15%
                </p>
                <p className="text-black text-2xl font-sans font-bold tracking-normal leading-none pb-4">
                  ${item.price}
                </p>
                <p className="text-gray-600 hidden lg:block text-xl font-sans tracking-wide leading-none pb-4">
                  {item.text}
                </p>
                <div className="pb-4">
                  {item.size ? (
                    <div>
                      <label
                        htmlFor="size"
                        className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                      >
                        Select Size
                      </label>
                      <select
                        id="size"
                        name="size"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        className="bg-gray-100 border  border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        {item.size.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : (
                    <div>
                      <label
                        htmlFor="size"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Size Not Available
                      </label>
                      <select
                        id="size"
                        disabled={true}
                        name="size"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        className="bg-gray-100 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option disabled>Select Size</option>
                      </select>
                    </div>
                  )}
                </div>

                <div className="pb-4">
                  <label
                    htmlFor="color"
                    className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                  >
                    Choose Color
                  </label>
                  <select
                    id="color"
                    name="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="bg-gray-100 border  border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    {item.color.map((color, index) => (
                      <option key={index} value={color}>
                        {color}
                      </option>
                    ))}
                  </select>
                </div>
                <Tooltip content="Add to Cart" placement="bottom">
                  <Button
                    className="hover:scale-110"
                    color="gray"
                    size="lg"
                    variant="outlined"
                    ripple={true}
                    onClick={() => {
                      dispatch(
                        addToCart({
                          id: item.id,
                          color: color,
                          name: item.name,
                          price: item.price,
                          totalPrice: item.price,
                          amount: 1,
                          size: size,
                          img: item.img,
                          text: item.text,
                        })
                      );
                      alert(item.name + " Added To Your Cart :)");
                    }}
                  >
                    Add to Cart
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SingleProduct;
