import React, { useState } from "react";
import Input from "@/components/UI/Input";

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
      <h2>
        <code>useState</code>
      </h2>
      <p className="mt-3">
        The <code>useState</code> hook is a React hook for managing state in
        functional components in React. Syntax: <br />
        <code>const [count, setCount] = useState(0)</code>
        <br />
        <code>count</code> is the value itself, and the second parameter{" "}
        <code>setCount</code> in the array destructuring is the function that
        updates the <code>count</code> state. Inside the <code>useState</code>{" "}
        is the default value of the <code>count</code>. It also works with
        arrays and objects.
      </p>
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
