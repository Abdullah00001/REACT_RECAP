import React from "react";
import { Helmet } from "react-helmet-async";
import Category from "../features/category/Category";
import ProductsSection from "../features/products/ProductsSection";

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Products</title>
      </Helmet>
      <Category/>
      <ProductsSection/>
    </>
  );
};

export default Products;
