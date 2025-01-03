var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Todo } from "../../models/todo.models.js";
const getAllTodoControllers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield Todo.aggregate([
            {
                $project: {
                    _id: 1,
                    todoTitle: 1,
                    isComplete: 1,
                },
            },
        ]);
        // const data = await Todo.find({});
        res.status(200).json({
            status: "success",
            message: "All todo retrieves successful",
            data,
        });
        return;
    }
    catch (error) {
        const err = error;
        console.log(err.message);
        next();
    }
});
export default getAllTodoControllers;
