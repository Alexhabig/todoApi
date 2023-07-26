import { addTodo, deleteTodo, getAllTodos, updateComplete, updateTodo } from '../controllers/todos';
import express from 'express';

export default (router:express.Router)=>{
    router.get('/todos',getAllTodos)
    router.delete('/todos/:id',deleteTodo)
    router.patch('/todos/:id',updateTodo);
    router.post('/todos/add', addTodo);
    router.patch('/todos/complete/:id',updateComplete);
    

}