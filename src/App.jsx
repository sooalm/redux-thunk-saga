import { useState, useEffect } from "react";

import "./App.css";
import { ListTasks } from "./components/ListTasks";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "./redux/thunks";
import { fetchTodos } from "./redux/createAsyncThunk";

function App() {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    // dispatch(getTasks());
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <div className="App">
        {(status === "pending" && (
          <h2 style={{ height: "50px" }}>Loading...</h2>
        )) || <h2 style={{ height: "50px" }}></h2>}
        {error && <h2>Error : {error}</h2>}

        <ListTasks />
      </div>
    </>
  );
}

export default App;
