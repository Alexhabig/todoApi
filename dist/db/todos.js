"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodosById = exports.deleteTodosById = exports.createTodo = exports.getTodosById = exports.getTodos = exports.TodoModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const TodoSchema = new mongoose_1.default.Schema({
    title: { type: String, default: null },
    desc: { type: String, default: null },
    status: { type: Boolean, },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
exports.TodoModel = mongoose_1.default.model('Todo', TodoSchema);
const getTodos = () => exports.TodoModel.find();
exports.getTodos = getTodos;
const getTodosById = (id) => exports.TodoModel.findById(id);
exports.getTodosById = getTodosById;
const createTodo = (values) => new exports.TodoModel(values).save().then((todo) => todo.toObject());
exports.createTodo = createTodo;
const deleteTodosById = (id) => exports.TodoModel.findByIdAndDelete({ _id: id });
exports.deleteTodosById = deleteTodosById;
const updateTodosById = (id, values) => exports.TodoModel.findByIdAndUpdate(id, values);
exports.updateTodosById = updateTodosById;
//# sourceMappingURL=todos.js.map