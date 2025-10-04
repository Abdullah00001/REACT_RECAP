import Button from "../../components/common/Button";
import useTodoContext from "../../hooks/useTodoContext";

interface IEditTodoProps {
  id: string;
}

const EditTodo: React.FC<IEditTodoProps> = ({ id }) => {
  const values = useTodoContext();

  const { setIsEditToggle, setTodoId } = values;
  return (
    <>
      <Button
        onClick={() => {
          setIsEditToggle(true);
          setTodoId(id);
        }}
        type="button"
        className="bg-green-300 rounded-lg px-3 py-2"
      >
        Edit
      </Button>
    </>
  );
};

export default EditTodo;
