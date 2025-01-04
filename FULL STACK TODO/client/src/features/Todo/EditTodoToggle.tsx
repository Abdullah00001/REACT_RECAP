import React, { useEffect, useState } from "react";
import Textarea from "../../components/common/Textarea";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import { FaMinus } from "react-icons/fa";
import useTodoContext from "../../hooks/useTodoContext";
import { ITodo } from "./types";
import { getTodo, updateTodo } from "../../apis/todoService";
import { Grid } from "react-loader-spinner";
const EditTodoToggle: React.FC = () => {
  const [isEdit, setIsEdit] = useState<Boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [task, setTask] = useState<ITodo>({});
  const [updatedTask, setUpdatedTask] = useState<ITodo | null>(null);
  const values = useTodoContext();
  const { setIsEditToggle, todoId } = values;

  const handleEditTodoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUpdatedTask({
      todoTitle: e.target.title.value,
      todoDescription: e.target.description.value,
    });
  };

  useEffect(() => {
    (async () => {
      try {
        if (updatedTask !== null) {
          setLoading(true)
          const response = await updateTodo(todoId, updatedTask);
          setTask(response.data.data);
          setIsEdit(false)
        }
      } catch (error) {
        setLoading(false)
        setUpdatedTask(null);
        console.log(error);
      } finally {
        setLoading(false)
        setUpdatedTask(null);
      }
    })();
  }, [updatedTask]);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await getTodo(todoId);
        setTask(response.data.data);
      } catch (error) {
        setLoading(false);
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <section className="absolute top-[32%] left-[35%]">
        <div className="w-[600px] bg-slate-400 p-4 rounded-lg">
          {loading ? (
            <div className="flex justify-center items-center h-[40vh]">
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
              <div
                className="absolute left-[90%] cursor-pointer"
                onClick={() => {
                  setIsEditToggle(false);
                }}
              >
                <FaMinus className="text-[25px]" />
              </div>
              <form
                className="flex gap-5 flex-col"
                onSubmit={handleEditTodoSubmit}
              >
                <div className="w-[500px]">
                  <Input
                    className="p-4 rounded-lg outline-none  bg-slate-400  w-full placeholder:text-black font-bold text-[18px]"
                    id="title"
                    name="title"
                    placeholder="Type Your Task titile Here"
                    type="text"
                    defaultValue={task.todoTitle}
                  />
                </div>
                <div className="w-[500px]">
                  <Textarea
                    className="outline-none  bg-slate-400  rounded-lg w-full p-4 placeholder:text-black font-bold text-[18px]"
                    rows={3}
                    cols={15}
                    id="description"
                    name="description"
                    placeholder="Type Your Task Description Here"
                    defaultValue={task.todoDescription}
                  ></Textarea>
                </div>
                {isEdit && (
                  <div className="flex gap-4">
                    <Button
                      type="submit"
                      className="bg-green-300 rounded-lg px-4 py-3"
                    >
                      Submit
                    </Button>
                    <Button
                      type="button"
                      className="bg-green-300 rounded-lg px-4 py-3"
                      onClick={() => {
                        setIsEdit(false);
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                )}
              </form>
              {!isEdit && (
                <div className="flex gap-4">
                  <Button
                    type="button"
                    className="bg-green-300 rounded-lg px-4 py-3"
                    onClick={() => {
                      setIsEdit(true);
                    }}
                  >
                    Edit
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default EditTodoToggle;
