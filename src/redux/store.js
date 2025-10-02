import { configureStore, Tuple } from "@reduxjs/toolkit";
import { logger } from "./middleware/logger";
import taskReducer from "./slices/taskSlice";
import createSagaMiddleware from "redux-saga";
import { countWatcher } from "./saga/countSaga";

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
  middleware: (getDefaultMiddleware) =>
    new Tuple(...getDefaultMiddleware(), logger, sagaMiddleWare),
});

sagaMiddleWare.run(countWatcher);

export default store;
