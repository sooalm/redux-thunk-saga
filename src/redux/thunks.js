import { getAllTasks } from "../api/taskFetch";
import { init } from "./slices/taskSlice";

//depricated
export const getTasks = () => {
  return (dispatch) => {
    getAllTasks()
      .then((tasks) => {
        dispatch(init(tasks));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
