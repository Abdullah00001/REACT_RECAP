import axios from "axios";
import React, { useEffect, useState } from "react";

const Category = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/categories")
      .then((response) => setCategories(response.data));
  }, []);
  return (
    <section>
      <div className="w-[1144px] mx-auto">
        <h1 className="text-4xl text-center font-bold mb-[20px] mt-[50px]">Our Popular Categories</h1>
        <div className="w-full grid grid-cols-4 gap-4 p-6">
          {categories.map((category) => (
            <div key={category.id} className="shadow-lg p-2 rounded-lg flex flex-col items-center gap-3">
              <img src={category.image} className="w-[300px] rounded-lg" alt="" />
              <h1 className="text-2xl">{category.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
