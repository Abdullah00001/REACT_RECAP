import React, { createContext, useState } from "react";
import { ITodo } from "../features/Todo/types";

interface ITodoProviderProps {
  children: React.ReactNode;
}

export interface ITodoProviderValue {
  isEditToggle: Boolean;
  setIsEditToggle: React.Dispatch<React.SetStateAction<Boolean>>;
  todoId: string | null;
  setTodoId: React.Dispatch<React.SetStateAction<string | null>>;
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodoContext = createContext<ITodoProviderValue | null>(null);

const TodoProvider: React.FC<ITodoProviderProps> = ({ children }) => {
  const [isEditToggle, setIsEditToggle] = useState<Boolean>(false);
  const [todoId, setTodoId] = useState<string | null>(null);
  const [todos, setTodos] = useState<ITodo[]>([]);
  const providerValue: ITodoProviderValue = {
    isEditToggle,
    setIsEditToggle,
    todoId,
    setTodoId,
    todos,
    setTodos,
  };
  return (
    <TodoContext.Provider value={providerValue}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };
