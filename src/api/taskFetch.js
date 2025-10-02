import { v4 as uuid } from "uuid";

export const getAllTasks = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: uuid(), title: "Depricated redux-thunk 1" },
        { id: uuid(), title: "Depricated redux-thunk 2" },
        { id: uuid(), title: "Depricated redux-thunk 3" },
      ]);
    }, 1000);
  });
};
