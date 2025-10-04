import React from "react";
import Input from "../../components/common/Input";
import { isCompleteTodo } from "../../apis/todoService";
import useTodoContext from "../../hooks/useTodoContext";

interface IIsCompleteTodoProps {
  id: string;
}

const IsComplete: React.FC<IIsCompleteTodoProps> = ({ id }) => {
  const todoContextValues = useTodoContext();
  const { todos, setTodos } = todoContextValues;
  const handleComplete = async () => {
    try {
      console.log(id);
      await isCompleteTodo(id, { isComplete: true });
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <label className="inline-flex items-center">
        <Input
          type="checkbox"
          id="isComplete"
          name="isComplete"
          className="hidden peer"
          onClick={handleComplete}
        />
        <span className="w-5 h-5 inline-block rounded-full border-2 border-black peer-checked:bg-blue-500 peer-checked:border-blue-500"></span>
      </label>
    </>
  );
};

export default IsComplete;
