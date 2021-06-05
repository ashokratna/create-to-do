import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/actions";

function TodoItem({ todo }) {
  let dispatch = useDispatch();
  const [editable, setEditable] = useState(false);

  return (
    <div className='container'>
      <div className='row mx-2 align-item-center' key={todo.id}>
        <div className='col'>{todo.date}</div>
        <div className='col'>{todo.task}</div>
        <div className='col'>{todo.status}</div>
        <div className='col'>
          <button
            onClick={() => {
              if (!editable) {
                alert(
                  "code is almost done but because of time exceed i stoped here! but i can explain next moves"
                );
                // dispatch(updateTodo(todo));
              }
              setEditable(false);
            }}
            className='btn  btn-primary m-2'
          >
            Edit
          </button>
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className='btn btn-danger m-2'
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
