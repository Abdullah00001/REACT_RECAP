import React, { useEffect, useState } from "react";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Textarea from "../../components/common/Textarea";
import { ThreeDots } from "react-loader-spinner";
import useTodoContext from "../../hooks/useTodoContext";
import { addTodo } from "../../apis/todoService";
import { ITodo } from "./types";

const AddTodo: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const todoContextValues = useTodoContext();
  const { todos, setTodos } = todoContextValues;
  const handleAddTodoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);
      const data: ITodo = {
        todoTitle: e.target.title.value,
        todoDescription: e.target.description.value,
      };
      const response = await addTodo(data);
      setTodos([...todos, response.data.data]);
      e.target.reset()
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="">
        <form className="flex gap-5 flex-col" onSubmit={handleAddTodoSubmit}>
          <div className="w-[500px]">
            <Input
              className="p-4 rounded-lg outline-none border-[1px] opacity-40 border-black w-full placeholder:text-black font-bold text-[18px]"
              id="title"
              name="title"
              placeholder="Type Your Task titile Here"
              type="text"
            />
          </div>
          <div className="w-[500px]">
            <Textarea
              className="outline-none border-[1px] opacity-40 border-black rounded-lg w-full p-4 placeholder:text-black font-bold text-[18px]"
              rows={3}
              cols={15}
              id="description"
              name="description"
              placeholder="Type Your Task Description Here"
            ></Textarea>
          </div>
          <div className="">
            <Button type="submit" className="bg-green-300 rounded-lg px-4 py-3">
              {loading ? (
                <ThreeDots
                  visible={true}
                  height="20"
                  width="50"
                  color="#fff"
                  radius="9"
                  ariaLabel="three-dots-loading"
                />
              ) : (
                "Add Task"
              )}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTodo;
