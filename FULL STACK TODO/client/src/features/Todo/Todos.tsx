import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import { getAllTodos } from "../../apis/todoService";
import useTodoContext from "../../hooks/useTodoContext";
import { Grid } from "react-loader-spinner";

const Todos: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const todoContextValues = useTodoContext();
  const { todos, setTodos } = todoContextValues;
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await getAllTodos();
        console.log(response.data.data);
        setTodos(response.data.data);
      } catch (error) {
        setLoading(false);
      } finally {
        setLoading(false);
      }
    })();
    return () => {
      setLoading(false);
    };
  }, []);
  return (
    <>
      <div className="flex flex-col gap-4 mt-5 w-[600px] h-[300px]  overflow-y-scroll p-2 border-[2px] border-black">
        {loading ? (
          <div className="flex justify-center items-center h-[80vh]">
            <Grid
              visible={true}
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="grid-loading"
              radius="12.5"
              wrapperStyle={{}}
              wrapperClass="grid-wrapper"
            />
          </div>
        ) : (
          <div>
            {todos.length > 0 ? (
              todos.map((todo) => (
                <Todo
                  key={todo._id}
                  _id={todo._id}
                  isComplete={todo.isComplete}
                  todoTitle={todo.todoTitle}
                />
              ))
            ) : (
              <div
                className={`flex flex-col items-center justify-center h-[35vh] text-black font-semibold text-lg`}
              >
                <p>No tasks yet!</p>
                <p className="mt-2 text-base text-green-400">
                  Add your first todo to kick-start your productivity!
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Todos;
