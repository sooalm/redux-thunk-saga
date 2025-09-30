import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask(state, action) {
      state.tasks.push(action.payload);
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    init(state,action){
      state.tasks = [...action.payload];
    }
}});

export const { addTask,deleteTask,init } = tasksSlice.actions;
export default tasksSlice.reducer;