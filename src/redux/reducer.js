import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actions";
import update from "immutability-helper";

const todos = [];

export let reducer = (state = todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      let newTodos = [...state];
      newTodos.push(action.payload);
      return newTodos;
    case DELETE_TODO:
      let newTodo = [...state];
      newTodo = newTodo.filter((todo) => todo.id !== action.payload);
      return newTodo;
    case UPDATE_TODO:
      return update(state, {
        [action.payload.id]: {
          todo: { $set: action.payload },
        },
      });
    default:
      break;
  }
  return state;
};
