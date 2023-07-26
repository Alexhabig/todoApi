"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTodo = exports.updateComplete = exports.updateTodo = exports.deleteTodo = exports.getAllTodos = void 0;
const todos_1 = require("../db/todos");
// get all todos
const getAllTodos = async (req, res) => {
    try {
        const todos = await (0, todos_1.getTodos)();
        return res.status(200).json(todos);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.getAllTodos = getAllTodos;
// delete one item
const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTodo = await (0, todos_1.deleteTodosById)(id);
        return res.json(deletedTodo);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.deleteTodo = deleteTodo;
// update Item
const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, desc, updatedAt } = req.body;
        const todo = await (0, todos_1.getTodosById)(id);
        todo.title = title;
        todo.desc = desc;
        todo.updatedAt = updatedAt;
        await todo.save();
        return res.status(200).json(todo).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.updateTodo = updateTodo;
// update Item
const updateComplete = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const todo = await (0, todos_1.getTodosById)(id);
        todo.status = status;
        await todo.save();
        return res.status(200).json(todo).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.updateComplete = updateComplete;
const addTodo = async (req, res) => {
    try {
        let { title, desc, createdAt, updatedAt } = req.body;
        console.log(req.body);
        // if(!title || !desc ){
        //     return res.sendStatus(400);
        // }
        // const now = new Date();
        const todo = await (0, todos_1.createTodo)({
            title,
            desc,
            status: false,
            createdAt,
            updatedAt
        });
        return res.status(200).json(todo).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.addTodo = addTodo;
//# sourceMappingURL=todos.js.map