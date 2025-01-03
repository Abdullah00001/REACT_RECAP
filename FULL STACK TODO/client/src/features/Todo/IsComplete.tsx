import React from "react";
import Input from "../../components/common/Input";

const IsComplete: React.FC = () => {
  return (
    <>
      <label className="inline-flex items-center">
        <Input
          type="checkbox"
          id="isComplete"
          name="isComplete"
          className="hidden peer"
        />
        <span className="w-5 h-5 inline-block rounded-full border-2 border-black peer-checked:bg-blue-500 peer-checked:border-blue-500"></span>
      </label>
    </>
  );
};

export default IsComplete;
