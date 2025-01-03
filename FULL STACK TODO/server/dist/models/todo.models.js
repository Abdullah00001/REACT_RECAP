import { model, Schema } from "mongoose";
const TodoSchema = new Schema({
    todoTitle: { type: String, required: true },
    todoDescription: { type: String, required: true },
    isComplete: { type: Boolean },
}, { timestamps: true });
export const Todo = model("Todo", TodoSchema);