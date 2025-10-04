import React from "react";
import IsComplete from "./IsComplete";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";
import { ITodo } from "./types";

const Todo: React.FC<ITodo> = ({ _id, isComplete, todoTitle }) => {
  return (
    <>
      {!isComplete && (
        <div className="w-full shadow-lg p-4 flex items-center rounded-lg">
          <div className="flex items-center w-[10%] justify-center">
            <IsComplete id={_id || ""} />
          </div>
          <div className="w-[60%]">
            <h1 className="font-bold text-xl">{todoTitle}</h1>
          </div>
          <div className="flex gap-4 items-center w-[30%]">
            <EditTodo id={_id || ""} />
            <DeleteTodo id={_id || ""} />
          </div>
        </div>
      )}
    </>
  );
};

export default Todo;
