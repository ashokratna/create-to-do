import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useDispatch } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import { addTodo } from "../redux/actions";
import { v1 as uuid } from "uuid";

function TodoInput() {
  const [startDate, setStartDate] = useState(new Date());
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();
  let date = `${startDate}`;
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <DatePicker
            required
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className='col'>
          <input
            type='text'
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Today's task?"
            required
          />
        </div>
        <div className='col'>
          <select onChange={(e) => setStatus(e.target.value)} required>
            <option selected disabled='disabled'>
              Select Status
            </option>
            <option value='Active'>Active</option>
            <option value='Inactive'>Inactive</option>
          </select>
        </div>
        <div className='col'>
          <button
            onClick={() => {
              dispatch(
                addTodo({
                  id: uuid(),
                  date: date,
                  task: task,
                  status: status,
                })
              );
              setStatus("");
              setTask("");
              setStartDate(new Date());
            }}
            className='btn btn-primary'
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoInput;
