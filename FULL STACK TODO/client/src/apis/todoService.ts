import { axiosInstance } from "../configs/axiosConfigs";
import { ITodo } from "../features/Todo/types";

const getAllTodos = async () => {
  try {
    return await axiosInstance.get("/todo");
  } catch (error) {
    const err = error as any;
    throw err.message;
  }
};

const getTodo = async (id: string | null) => {
  try {
    console.log(id);
    return await axiosInstance.get(`/todo/${id}`);
  } catch (error) {
    const err = error as any;
    throw err.message;
  }
};

const deleteTodo = async (id: string | null) => {
  try {
    return await axiosInstance.delete(`/todo/${id}`);
  } catch (error) {
    const err = error as any;
    throw err.message;
  }
};

const addTodo = async (data: ITodo) => {
  try {
    return await axiosInstance.post("/todo", data);
  } catch (error) {
    const err = error as any;
    throw err.message;
  }
};

const updateTodo = async (id: string | null, data: ITodo) => {
  try {
    return await axiosInstance.put(`/todo/${id}`, data);
  } catch (error) {
    const err = error as any;
    throw err.message;
  }
};

const isCompleteTodo = async (id: string | null, data: ITodo) => {
  try {
    return await axiosInstance.patch(`/todo/${id}`, data);
  } catch (error) {
    const err = error as any;
    throw err.message;
  }
};

export {
  getAllTodos,
  getTodo,
  deleteTodo,
  addTodo,
  updateTodo,
  isCompleteTodo,
};
