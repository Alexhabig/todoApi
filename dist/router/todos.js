"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todos_1 = require("../controllers/todos");
exports.default = (router) => {
    router.get('/todos', todos_1.getAllTodos);
    router.delete('/todos/:id', todos_1.deleteTodo);
    router.patch('/todos/:id', todos_1.updateTodo);
    router.post('/todos/add', todos_1.addTodo);
    router.patch('/todos/complete/:id', todos_1.updateComplete);
};
//# sourceMappingURL=todos.js.map