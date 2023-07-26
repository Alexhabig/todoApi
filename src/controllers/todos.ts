import { now } from 'mongoose';
import { createTodo, deleteTodosById, getTodos, getTodosById } from '../db/todos'
import express  from 'express'

// get all todos
export const getAllTodos =async (req:express.Request, res:express.Response) => {
    try {
        const todos = await getTodos();

        return res.status(200).json(todos)
    } catch (error) {
        console.log(error)
        return res.sendStatus(400)
        
    }
}

// delete one item
export const deleteTodo = async (req:express.Request, res:express.Response) => {
    try {
        const { id } = req.params;

        const deletedTodo = await deleteTodosById(id);

        return res.json(deletedTodo); 

    } catch (error) {
        console.log(error)
        return res.sendStatus(400)
    }
}

// update Item
export const updateTodo = async (req:express.Request, res:express.Response) => {
    try {
        const {id} = req.params
        const { title,desc,updatedAt} = req.body;

        const todo = await getTodosById(id);

        todo.title = title
        todo.desc = desc
        todo.updatedAt = updatedAt
        

        await todo.save()

        return res.status(200).json(todo).end()
        
    } catch (error) {
        console.log(error)
        return res.sendStatus(400)
    }
}

// update Item
export const updateComplete = async (req:express.Request, res:express.Response) => {
    try {
        const {id} = req.params
        const { status} = req.body;

        const todo = await getTodosById(id);

        todo.status=status
        
        await todo.save()

        return res.status(200).json(todo).end()
        
    } catch (error) {
        console.log(error)
        return res.sendStatus(400)
    }
}



export const addTodo = async (req: express.Request, res: express.Response)=> {
    try {
        let {title, desc,createdAt,updatedAt} = req.body;
        console.log(req.body)

        // if(!title || !desc ){
        //     return res.sendStatus(400);
        // }

        // const now = new Date();

        const todo= await createTodo({
            title,
            desc,
            status:false,
            createdAt,
            updatedAt
        })

        return res.status(200).json(todo).end();


    } catch (error) {
        console.log(error)
        return res.sendStatus(400)
    }
}