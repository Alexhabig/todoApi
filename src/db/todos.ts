import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title:{type: String,  default:null},
    desc:{type: String,  default:null },
    status:{type:Boolean, },
    createdAt:{type:Date, default: Date.now},
    updatedAt:{type:Date, default: Date.now},
});



export const TodoModel = mongoose.model('Todo',TodoSchema);

export const getTodos = ()=>TodoModel.find();

export const getTodosById = (id:string) => TodoModel.findById(id);
export const createTodo = (values:Record<string, any>) => new TodoModel(values).save().then((todo)=>todo.toObject())

export const deleteTodosById = (id:string) => TodoModel.findByIdAndDelete({_id:id})

export const updateTodosById = (id:string, values: Record<string,any>) => TodoModel.findByIdAndUpdate(id,values)