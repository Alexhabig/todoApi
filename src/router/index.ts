import express from "express";
import todos from "./todos";

const router = express.Router();

export default ():express.Router =>{
    todos(router);
    // users(router);
    return router;
};