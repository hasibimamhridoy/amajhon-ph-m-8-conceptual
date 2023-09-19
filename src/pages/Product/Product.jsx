import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Product = () => {
  const productDetails = useLoaderData();
  const { brand, description, price, title, thumbnail } = productDetails;

  // const params = useParams()
  // console.log(params);

  // const [productData,setProductData] = useState()
  
  // useEffect(()=>{

  //   fetch(`https://dummyjson.com/products/${params?.id}`)
  //   .then(res=>res.json())
  //   .then(data=>setProductData(data))

  // },[params?.id])

  // console.log("products data",productData);

  return (
    <div className="px-5 mx-auto w-full">
      <div className="lg:w-full mx-auto flex ">
        <img
          alt="ecommerce"
          className="w-full object-cover object-center rounded border border-gray-200"
          src={thumbnail}
        />
        <div className="w-full lg:pl-10 ">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">
            {brand}
          </h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
            {title}
          </h1>

          <p className="leading-relaxed">{description}</p>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
            <div className="flex">
              <span className="mr-3">Color</span>
              <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
              <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
              <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
            </div>
            <div className="flex ml-6 items-center">
              <span className="mr-3">Size</span>
              <div className="relative">
                <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                  <option>SM</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
      
              </div>
            </div>
          </div>

          <span className="title-font font-medium text-2xl text-gray-900">
            Tk.{price}
          </span>

          <div className="flex space-x-5 my-5">
            <button className="flex text-white bg-red-500 border-0 py-2 px-6 w-full focus:outline-none hover:bg-red-600 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
