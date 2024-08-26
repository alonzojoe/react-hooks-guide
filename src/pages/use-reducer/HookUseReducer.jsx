import React, { useReducer, useRef } from "react";
import BreadCrumbs from "@/components/UI/BreadCrumbs";
import Input from "@/components/UI/Input";
import TodoItem from "@/pages/use-reducer/components/TodoItem";
import CodeEditor from "@uiw/react-textarea-code-editor";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  REMOVE_TODO: "remove-todo",
  TOGGLE_STATUS: "toggle-status",
};

const todosReducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      const newTodo = {
        id: Date.now(),
        name: action.todo,
        completed: false,
      };
      return [newTodo, ...todos];

    case ACTIONS.REMOVE_TODO:
      return todos.filter((todo) => todo.id !== action.id);

    case ACTIONS.TOGGLE_STATUS:
      return todos.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    default:
      return todos;
  }
};

const HookUseReducer = () => {
  console.log("componet HookUseReducer has been rendered");
  const inputRef = useRef("");

  const [todos, dispatch] = useReducer(todosReducer, []);

  const submitHandler = (e) => {
    e.preventDefault();

    if (inputRef.current.value.trim() === "") return;

    dispatch({ type: ACTIONS.ADD_TODO, todo: inputRef.current.value });

    inputRef.current.value = "";
  };

  return (
    <>
      <BreadCrumbs category="Hooks" name="useReducer()" />
      <h2>
        <code>useReducer()</code>
      </h2>
      <p className="mt-3">
        The <code>useReducer</code> is a React hook for managing more complex
        state logic in functional components, especially when the state involves
        multiple sub-values or when the next state depends on the previous one.
        <br />
      </p>
      <span className="d-block my-3">Syntax:</span>
      <p>
        <CodeEditor
          value={`const [state, dispatch] = useReducer(reducer, initialState)`}
          language="jsx"
          placeholder="Please enter JSX code."
          onChange={(evn) => setCode(evn.target.value)}
          padding={0}
          data-color-mode="dark"
          style={{
            backgroundColor: "#161B22",
            borderRadius: "5px",
            pointerEvents: "none",
            fontSize: "15px",
            fontFamily:
              "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
          }}
        />
      </p>
      <ul>
        <li>
          <code>state</code> is the current state value.
        </li>
        <li>
          <code>dispatch</code> is the function to send actions to the reducer.
        </li>
        <li>
          <code>reducer</code> is a function that takes the current state and an
          action, and returns a new state.
        </li>
        <li>
          <code>initialState</code> is the initial state value.
        </li>
      </ul>
      <h3>
        <i>Example use case:</i>
      </h3>
      <p>
        <CodeEditor
          value={`const todosReducer = (todos, action) => {\n  switch (action.type) {\n    case ACTIONS.ADD_TODO:\n      const newTodo = {\n        id: Date.now(),\n        name: action.todo,\n        completed: false,\n      };\n      return [newTodo, ...todos];\n\n    case ACTIONS.REMOVE_TODO:\n      return todos.filter((todo) => todo.id !== action.id);\n\n    case ACTIONS.TOGGLE_STATUS:\n      return todos.map((todo) => {\n        if (todo.id === action.id) {\n          return { ...todo, completed: !todo.completed };\n        }\n        return todo;\n      });\n    default:\n      return todos;\n  }\n};`}
          language="javascript"
          placeholder="Please enter JavaScript code."
          onChange={(evn) => setCode(evn.target.value)}
          padding={0}
          data-color-mode="dark"
          style={{
            backgroundColor: "#161B22",
            borderRadius: "5px",
            pointerEvents: "none",
            fontSize: "15px",
            fontFamily:
              "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
          }}
        />
      </p>
      <p>
        <CodeEditor
          value={`const [todos, dispatch] = useReducer(todosReducer, []);`}
          language="javascript"
          placeholder="Please enter JavaScript code."
          onChange={(evn) => setCode(evn.target.value)}
          padding={0}
          data-color-mode="dark"
          style={{
            backgroundColor: "#161B22",
            borderRadius: "5px",
            pointerEvents: "none",
            fontSize: "15px",
            fontFamily:
              "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
          }}
        />
      </p>

      <h3>
        <code>Todo App (Add Todo, Remove Todo and Toggle Status)</code>
      </h3>
      <div className="w-50">
        <form onSubmit={submitHandler}>
          <label htmlFor="todo" className="mb-2">
            Enter New Todo
          </label>
          <Input ref={inputRef} type="text" id="todo" className="mb-2" />
          <button className="btn btn-secondary">Add Todo</button>
        </form>
        <hr />
        <h4>Todo List</h4>
        {todos.length === 0 ? (
          <p>There are no todos added. Add some?</p>
        ) : (
          <ul>
            {todos.map((todo) => (
              <TodoItem todo={todo} dispatch={dispatch} key={todo.id} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default HookUseReducer;
