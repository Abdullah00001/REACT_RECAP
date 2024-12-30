import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../features/hero/Hero";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero />
    </>
  );
};

export default Home;
