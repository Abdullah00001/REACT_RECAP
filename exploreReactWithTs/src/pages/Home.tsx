import React from "react";
import Button from "../components/Button";
import UseAuthContext from "../hooks/UseAuthContext";

const Home: React.FC = () => {
  const { count, setCount } = UseAuthContext() as any;
  const onClick = (): void => {
    setCount(count + 1);
  };
  return (
    <>
      <div className="flex items-center justify-center h-[80vh] flex-col">
        <h1 className="text-5xl mb-3">Value : {count}</h1>
        <Button
          type="button"
          children="Click Me"
          onClick={onClick}
          className={
            "bg-blue-400 text-black px-4 py-3 rounded-md font-bold hover:opacity-[90%]"
          }
        />
      </div>
    </>
  );
};

export default Home;
