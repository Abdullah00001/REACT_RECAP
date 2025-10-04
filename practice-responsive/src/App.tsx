import { FC } from "react";

const App: FC = () => {
  return (
    <>
      <section className="px-5 mt-5 max-w-full lg:p-0 lg:mt-0 lg:max-w-[1144px] lg:mx-auto">
        <div className=" flex flex-col w-full space-y-3 md:flex-row md:items-center md:space-y-0">
          <div className="w-full md:w-1/2">
            <img
              src="https://images.samsung.com/is/image/samsung/p6pim/bd/2501/gallery/bd-galaxy-s25-s936-sm-s936bdbcbkd-thumb-544656867?$UX_EXT2_PNG$"
              alt="mobile image"
              className="w-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="font-bold text-2xl mb-3 lg:text-5xl lg:mb-6">Galaxy S25</h1>
            <p className="lg:text-2xl">
              Meet Galaxy S25 and S25+. A sleek, premium design wrapped in a
              strong aluminum frame with an immersive screen, sophisticated
              camera and now slimmed down for a more comfortable grip.3,5
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
