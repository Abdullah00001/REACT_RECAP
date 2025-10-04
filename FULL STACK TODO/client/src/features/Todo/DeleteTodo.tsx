import { useState } from "react";
import Button from "../../components/common/Button";
import { ThreeDots } from "react-loader-spinner";
import { deleteTodo } from "../../apis/todoService";
import useTodoContext from "../../hooks/useTodoContext";

interface IDeleteTodo {
  id: string;
}

const DeleteTodo: React.FC<IDeleteTodo> = ({ id }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const todoContextValues = useTodoContext();
  const { todos, setTodos } = todoContextValues;
  const handleDelete = async () => {
    try {
      setLoading(true);
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Button
        onClick={handleDelete}
        type="button"
        className="bg-green-300 rounded-lg px-4 py-2"
      >
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
          "Delete"
        )}
      </Button>
    </>
  );
};

export default DeleteTodo;
