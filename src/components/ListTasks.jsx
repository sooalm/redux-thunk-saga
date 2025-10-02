import React from "react";
import { v4 as uuid } from "uuid";

import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/slices/taskSlice";
import { deleteTodos, toggleTodos } from "../redux/createAsyncThunk";

import "../styles/ListTasks.css";

export const ListTasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const handleAddTask = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    if (title) {
      dispatch(
        addTask({
          id: uuid(),
          title: title,
          completed: false,
        })
      );
    }
  };

  const handleToggle = (id) => {
    dispatch(toggleTodos(id));
  };

  return (
    <>
      <form className="form" onSubmit={handleAddTask}>
        <input name="title" type="text" placeholder="New Task" />
        <button type="submit">Add Task</button>
      </form>
      <div className="list-tasks">
        <div className="list-tasks__title">Tasks:</div>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div className="flex-row" key={task.id}>
              <div
                onClick={() => handleToggle(task.id)} //(e) => e.target.classList.toggle("strikeTrough")
                className={
                  task.completed
                    ? "list-tasks__task strikeTrough"
                    : "list-tasks__task"
                }
              >
                {task.title}
              </div>
              <button
                onClick={() => dispatch(deleteTodos(task.id))}
                className="delete-button"
              ></button>
            </div>
          ))
        ) : (
          <div>Нет задач</div>
        )}
      </div>
    </>
  );
};
