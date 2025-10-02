import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const count = useSelector((state) => state.tasks.value); // Читаем state из slice
  const dispatch = useDispatch(); // Получаем dispatch

  const handleAsyncIncrement = () => {
    dispatch({ type: "async_increment" }); // Диспатч — сага сработает!
  };

  const handleAsyncDecrement = () => {
    dispatch({ type: "async_decrement" }); // Для decrement
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleAsyncIncrement}>
        Async Increment (+1 после 1 сек)
      </button>
      <button onClick={handleAsyncDecrement}>
        Async Decrement (-1 после 1 сек)
      </button>
    </div>
  );
}
