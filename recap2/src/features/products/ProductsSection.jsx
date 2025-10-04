import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductsSection = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const productDetails = (id) => {
    navigate(`/products/${id}`);
  };
  useEffect(() => {
    axios
      .get("https://fakestoreapi.in/api/products")
      .then((response) => setProducts(response.data.products));
  }, []);
  return (
    <section>
      <div className="w-[1144px] mx-auto">
        <h1 className="text-4xl font-bold text-center mt-[50px] mb-[20px]">
          Explore Our Products
        </h1>
        <div className="grid grid-cols-5 gap-4 content-center">
          {products.map((product) => (
            <div key={product.id} className="p-3 shadow-xl rounded-[12px] ">
              <img
                onClick={() => productDetails(product.id)}
                className="w-[200px] h-[180px] shadow-md rounded-xl cursor-pointer hover:opacity-60"
                src={product.image}
                alt=""
              />
              <h3
                onClick={() => productDetails(product.id)}
                className="text-md font-bold mt-3 cursor-pointer hover:text-red-400 hover:underline"
              >
                {product.model.slice(0, 15)}
              </h3>
              <h5 className="font-semibold mt-4">{product.price}$</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
