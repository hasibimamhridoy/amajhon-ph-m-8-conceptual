import React from "react";
import { ArrowRightCircleIcon, HeartIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, images, price, stock, title } = product || {};

  return (
    <div>
      <div>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a>
            <img
              className=" w-full h-52 rounded-t-lg object-fill p-5 rounded-lg z-5"
              src={images[0]}
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <div className="flex justify-between">
              <a>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {title}
                </h5>
              </a>
              <h1>Stock ( {stock} )</h1>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  Tk. {price.toFixed(2)}
                </span>
              </div>
              <div className="details-btn flex space-x-4 items-center ">
                <HeartIcon className="h-5 w-5 text-blue-500 cursor-pointer"></HeartIcon>

                {/* //show Details */}
                <Link to={`/products/${id}`}>
                  <ArrowRightCircleIcon className="h-6 w-6 cursor-pointer"></ArrowRightCircleIcon>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
