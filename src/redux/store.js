import { configureStore, Tuple } from "@reduxjs/toolkit";
import { logger } from "./middleware/logger";
import taskReducer from "./slices/taskSlice";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
  middleware: (getDefaultMiddleware) =>
    new Tuple(...getDefaultMiddleware(), logger),
});

export default store;
