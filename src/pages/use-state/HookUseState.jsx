import React, { useState } from "react";
import BreadCrumbs from "@/components/UI/BreadCrumbs";
import Input from "@/components/UI/Input";
import CodeEditor from "@uiw/react-textarea-code-editor";

const HookUseState = () => {
  const [count, setCount] = useState(0);

  const [name, setName] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  return (
    <>
      <BreadCrumbs category="Hooks" name="useState()" />
      <h2>
        <code>useState()</code>
      </h2>
      <div className="mt-3">
        The <code>useState</code> hook is a React hook for managing state in
        functional components. It allows you to add state variables to your
        functional components. Here’s how it works:
        <span className="d-block my-3">Syntax:</span>
        <p>
          <CodeEditor
            value={`const [count, setCount] = useState(0);`}
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
        <ul className="mt-3">
          <li>
            <code>count()</code> This is the current value of the state
            variable.
          </li>
          <li>
            <code>setCount()</code> This is the function used to update the
            state variable.
          </li>
          <li>
            Inside the <code>useState()</code> hook, <code>0</code> is the
            default value of <code>count</code>.
          </li>
        </ul>
        <p>
          The <code>useState</code> hook can also be used with arrays and
          objects.
        </p>
        <span className="d-block my-3">For example:</span>
        <p>
          <CodeEditor
            value={`const [user, setUser] = useState({ name: 'John', age: 30 })`}
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
        <p>
          In this case, <code>user</code> is an object containing{" "}
          <code>name</code> and <code>age</code>, and <code>setUser</code> is
          used to update this object.
        </p>
        <p>
          Updating state with the previous value: When the new state depends on
          the previous state, you should use a callback function with{" "}
          <code>setCount</code>. This ensures that you’re working with the most
          recent state value, especially in cases where state updates might be
          batched or asynchronous. Here’s how you use it:
        </p>
        <span className="d-block my-3">Example:</span>
        <p>
          <CodeEditor
            value={`setCount((prevCount) => prevCount + 1)`}
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
        <p>
          In this example, <code>prevCount</code> represents the previous state
          value. By using this callback function, you ensure that the new state
          is based on the most recent value of <code>count</code>, which is
          important when multiple state updates might occur simultaneously or in
          quick succession.
        </p>
        <p>
          {" "}
          This pattern is especially useful in scenarios where you have multiple
          state updates that need to be processed in a specific order or when
          the state update is dependent on the current state value.
        </p>
      </div>

      <h3>
        <i>Common useCase</i>
      </h3>
      <h3>
        <code>Counter</code>
      </h3>
      <button
        className="btn btn-light mx-3"
        onClick={() => setCount((prev) => prev + 1)}
      >
        +
      </button>
      {count}
      <button
        className="btn btn-light mx-3"
        onClick={() => setCount((prev) => prev - 1)}
      >
        -
      </button>
      <hr />
      <h3>
        <code>Two Way Binding Single Input</code>
      </h3>
      <div className="w-50">
        <label className="mb-2">My Name is: {name}</label>
        <Input
          type="text"
          className="form-control-sm"
          value={name}
          onChange={() => setName(event.target.value)}
        />
      </div>
      <hr />
      <h3>
        <code>Two Way Binding Multiple Input (eg. Forms)</code>
      </h3>
      <div className="w-50">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <Input
              type="text"
              value={formData.name}
              onChange={changeHandler}
              className="form-control"
              name="name"
              id="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <Input
              type="email"
              value={formData.email}
              onChange={changeHandler}
              className="form-control"
              name="email"
              id="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <Input
              type="text"
              value={formData.address}
              onChange={changeHandler}
              className="form-control"
              name="address"
              id="address"
            />
          </div>
          <pre>
            Output:
            {JSON.stringify(formData)}
          </pre>
        </form>
      </div>
    </>
  );
};

export default HookUseState;
