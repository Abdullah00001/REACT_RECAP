import React from "react";
import AddTodo from "../features/Todo/AddTodo";
import Todos from "../features/Todo/Todos";
import { Helmet } from "react-helmet-async";
import EditTodoToggle from "../features/Todo/EditTodoToggle";
import useTodoContext from "../hooks/useTodoContext";

const Home: React.FC = () => {
  const values = useTodoContext();

  const { isEditToggle } = values as any;
  return (
    <>
      <Helmet>
        <title>Full Stack Todo</title>
      </Helmet>
      <section className="relative">
        <div className="w-[1144px] mx-auto">
          <div className="flex gap-[50px]  h-[80vh] items-center justify-center w-full">
            <AddTodo />
            <Todos />
          </div>
        </div>
      </section>
      {isEditToggle && <EditTodoToggle />}
    </>
  );
};

export default Home;
