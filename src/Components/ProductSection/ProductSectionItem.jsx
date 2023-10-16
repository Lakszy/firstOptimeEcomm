import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { addToCart } from "../../features/slideSlicer/cartSlice";
import { useNavigate } from "react-router";

const ProductSectionItem = ({
  id,
  img,
  name,
  type,
  text,
  size,
  price,
  color,
  totalPrice,
}) => {
  const defaultSize = size[2];
  const defaultColor = color[0];
  const navigate = useNavigate();
  return (
    <>
      <div className="mb-4 p-2 md:p-0">
        <Card className="relative">
          <CardHeader className="h-60 md:h-96">
            <img
              onClick={() => navigate(`/filteredProducts/${type}`)}
              src={img}
              alt={name}
              className="w-full h-full object-cover"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="gray"
              className="mb-2"
              textGradient
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                maxWidth: "150ch",
              }}
            >
              {name.slice(0, 18)}
              {name.length > 10 ? "..." : ""}
            </Typography>
            <Typography
              color="gray"
              className="hidden md:block font-medium"
              textGradient
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                maxWidth: "150ch",
              }}
            >
              {text.slice(0, 50)}
              {text.length > 50 ? "..." : ""}
            </Typography>
            <div className="flex justify-between items-center pt-2 md:pt-4">
              <Typography
                color="red"
                className="hidden md:block font-bold"
                textGradient
              >
                Size left:{" "}
                <span className="text-gray-800 text-sm ">{defaultSize}</span>
              </Typography>
            </div>
          </CardBody>
          <CardFooter className="flex justify-center pt-2">
            <Tooltip content="Add to Cart" placement="bottom">
              <Button
                onClick={() => {
                  addToCart({
                    id: id,
                    img: img,
                    text: text,
                    amount: 1,
                    price: price,
                    totalPrice: totalPrice,
                    name: name,
                    size: defaultSize,
                    color: defaultColor,
                  });
                  alert(name + " Added To Your Cart :)");
                }}
                size="sm"
                color="gray"
                variant="outlined"
                ripple={true}
              >
                Add to Cart
              </Button>
            </Tooltip>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default ProductSectionItem;
