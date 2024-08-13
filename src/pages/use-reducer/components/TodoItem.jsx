import React from "react";
import { ACTIONS } from "../HookUseReducer";

const TodoItem = ({ todo, dispatch }) => {
  const toggleTodo = () => {
    dispatch({ type: ACTIONS.TOGGLE_TODO, id: todo.id });
  };

  const removeTodo = () => {
    dispatch({ type: ACTIONS.REMOVE_TODO, id: todo.id });
  };

  return (
    <li>
      <div className="d-flex align-items-center justify-content-between">
        <span className={todo.completed ? "text-decoration-line-through" : ""}>
          {todo.name}
        </span>
        <div className="d-flex gap-2">
          <button className="btn btn-success btn-sm" onClick={toggleTodo}>
            {todo.completed ? "Undo" : "Mark as Done"}
          </button>
          <button className="btn btn-danger btn-sm" onClick={removeTodo}>
            x
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
