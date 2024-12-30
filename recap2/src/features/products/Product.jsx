import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.in/api/products/${id}`)
      .then((response) => setProduct(response.data.product));
  }, [id]);
  return (
    <>
      <section className="mt-[50px]">
        <div className="w-[1144px] mx-auto">
          <div className="flex items-center gap-8">
            <div className="w-[40%] rounded-xl p-5 flex justify-center">
              <img src={product.image} className="w-[300px]" alt="" />
            </div>
            <div className="w-[60%] rounded-xl p-5">
              <h1 className="text-xl font-semibold text-blue-500">
                {product.title}
              </h1>
              <h3 className=" text-lg font-medium mt-4">
                Model : {product.model}
              </h3>
              <h3 className=" text-lg font-medium mt-3">
                Brand : {product.brand}
              </h3>
              <h3 className=" text-lg font-medium mt-3">
                Color : {product.color}
              </h3>
              <div className="flex justify-start items-center gap-4 mt-3">
                <div className="py-2 px-4 bg-gray-200 rounded-[15px] shadow-lg ">
                  Price : {product.price}$
                </div>
                <div className="py-2 px-4 bg-gray-200 rounded-[15px] shadow-lg ">
                  Discount: {product.discount}%
                </div>
                <div className="py-2 px-4 bg-gray-200 rounded-[15px] shadow-lg ">
                  Discount Price :{" "}
                  {Math.round(
                    product.price - (product.price * product.discount) / 100
                  )}
                  $
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[200px] mb-4">
            <h1 className="text-3xl font-bold">Description :</h1>
            <p className="mt-4 font-medium text-lg">{product.description}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
