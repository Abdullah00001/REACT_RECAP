import { useContext } from "react";
import { ITodoProviderValue, TodoContext } from "../providers/TodoProvider";

const useTodoContext = (): ITodoProviderValue => {
  const context = useContext(TodoContext);
  if (!context)
    throw new Error("useTodoContext must be used within a TodoProvider");
  return context;
};

export default useTodoContext;
