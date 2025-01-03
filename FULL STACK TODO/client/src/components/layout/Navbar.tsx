import React from "react";

const Navbar: React.FC = () => {
  return (
    <>
      <section>
        <div className="w-[1144px] mx-auto">
          <div className="flex items-center py-3">
            <div className="w-[30%]">
              <h1 className="text-2xl font-bold">Full Stack Todo</h1>
            </div>
            <div className="w-[70%]"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
