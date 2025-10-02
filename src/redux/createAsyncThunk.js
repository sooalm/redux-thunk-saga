import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteTask } from "./slices/taskSlice";

export const fetchTodos = createAsyncThunk(
  "tasks/fetchTodos",
  async function (_, { rejectWithValue }) {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    try {
      if (!response.ok) {
        throw new Error("Server Error!");
      }

      const data = await response.json();
      return data.slice(0, 3);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteTodos = createAsyncThunk(
  "tasks/deleteTodos",
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${1}`,
        {
          //тут должно быть по идее ${id}, но у нас уникальные ключи которых нет на сервере-имитации, так что поставим единицу
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error(`Delete failed with status: ${response.status}`);
      }

      dispatch(deleteTask(id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const toggleTodos = createAsyncThunk(
  "tasks/toggleTodos",
  async function (id, { rejectWithValue, getState }) {
    try {
      const state = getState();
      const todo = state.tasks.tasks.find((task) => task.id === id);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${1}`,
        {
          //тут должно быть по идее ${id}, но у нас уникальные ключи которых нет на сервере-имитации, так что поставим единицу
          method: "PATCH",
          header: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ completed: !todo.completed }),
        }
      );

      if (!response.ok) {
        throw new Error(`Toggle failed with status: ${response.status}`);
      }

      const data = await response.json();

      return todo;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
