import { Request, Response, NextFunction } from "express";
import { Todo } from "../models/todo";
import { theTodos } from "../theTodos";

let todoController = {
  getAll: (req: Request, res: Response, next: NextFunction) => {
    //console.log({ theTodos });
    res.status(200).json({ msg: "success", data: theTodos });
  },
  get: (req: Request, res: Response, next: NextFunction) => {
    let todoId: string = req.params.todoId;
    let foundedTodo: Todo = theTodos.find((i) => i.id === todoId) as Todo;
    return res.status(200).json({ msg: "success", data: foundedTodo });
  },
  post: (req: Request, res: Response, next: NextFunction) => {
    let newTodo: Todo = {
      id: req.body.id,
      title: req.body.title,
    };
    theTodos.push(newTodo);
    //console.log({ theTodos });
    res.status(201).json({ msg: "success", data: theTodos });
  },
  update: (req: Request, res: Response, next: NextFunction) => {
    console.log("--update route --");
    let todoId: string = req.params.todoId;
    let newTitle = req.body.title;
    //console.log({ todos });
    let newTodos: Array<Todo> = theTodos.map((element: Todo) => {
      if (element.id === todoId) {
        element.title = newTitle;
        return element;
      } else {
        return element;
      }
    });

    //console.log({ newTodos });

    res.status(200).json({ msg: "success", data: newTodos });
  },

  delete: (req: Request, res: Response, next: NextFunction) => {
    console.log("--delete route --");
    let todoId: string = req.params.todoId;
    let index: number = theTodos.findIndex((i) => i.id === todoId);
    theTodos.splice(index, 1);
    res.status(200).json({ msg: "success", data: theTodos });
  },
};

export default todoController;
