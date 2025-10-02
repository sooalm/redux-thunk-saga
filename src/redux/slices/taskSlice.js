import { createSlice } from "@reduxjs/toolkit";
import { deleteTodos, toggleTodos, fetchTodos } from "../createAsyncThunk";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    status: null,
    error: null,
    value: 0,
  },
  reducers: {
    addTask(state, action) {
      state.tasks.push(action.payload);
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    init(state, action) {
      state.tasks = [...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "resolved";
        state.tasks = action.payload;
      })
      .addCase(fetchTodos.rejected, errorRejected)

      .addCase(deleteTodos.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(deleteTodos.fulfilled, (state) => {
        state.status = "resolved";
      })
      .addCase(deleteTodos.rejected, errorRejected)

      .addCase(toggleTodos.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(toggleTodos.fulfilled, (state, action) => {
        state.status = "resolved";
        const payload = action.payload;
        const task = state.tasks.find((task) => task.id === payload.id);

        if (task) {
          task.completed = !payload.completed;
        } else {
          // На случай, если задача не найдена (может быть полезно для отладки)
          console.warn(`Task with id ${payload.id} not found`);
        }
      })
      .addCase(toggleTodos.rejected, errorRejected)
      .addCase("counter/increment", (state) => {
        state.value += 1;
      })
      .addCase("counter/decrement", (state) => {
        state.value -= 1;
      });
  },
});
const errorRejected = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

export const { addTask, deleteTask, init } = tasksSlice.actions;
export default tasksSlice.reducer;
