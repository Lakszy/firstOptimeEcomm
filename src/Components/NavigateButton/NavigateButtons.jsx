import React from "react";
import { Button } from "@material-tailwind/react";
import { filterProducts } from "../../features/slideSlicer/productSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const NavigateButtons = () => {
  const buttons = [
    "mclothing",
    "jewelry",
    "electronics",
    "wclothing",
  ];
console.log(filterProducts);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex flex-wrap justify-center py-8 gap-2">
        {buttons.map((button, index) => {
          return (
            <div key={index} className="mb-4 sm:w-1/3 lg:w-auto">
              <Link to={"/filteredProducts/" + button}>
                <Button
                  color="gray"
                  size="lg"
                  variant="outlined"
                  ripple={true}
                  className="text-black hover:bg-purple-900 duration-300 ease-in-out hover:text-white"
                  onClick={() => dispatch(filterProducts(button))}
                >
                  {button}
                </Button>
              </Link>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default NavigateButtons;
