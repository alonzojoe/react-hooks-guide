import React from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

const HookUseRef = () => {
  return (
    <>
      <h2>
        <code>useRef()</code>
      </h2>
      <ul className="mt-3">
        <li>
          <p>
            <code>useRef()</code> is primarily used to access and interact with
            DOM elements directly in React, similar to how you might use
            <code>document.getElementById</code> in vanilla JavaScript.
          </p>
        </li>
        <li>
          <p>
            It can also be used to store mutable values that do not cause a
            re-render when updated.
          </p>
        </li>
      </ul>
      <span className="d-block my-2">Syntax:</span>
      <p>
        <CodeEditor
          value={`const refElement = useRef();\n\nreturn (\n <input type="text" ref={refElement} />\n);`}
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
      <h3 className="my-4">
        Common Use Cases of <code>useRef()</code>
      </h3>
      <p className="fw-semibold">Case 1: Accessing DOM Elements:</p>
      <span className="d-block mb-2">
        • You can create a reference to a DOM element and access it directly.
      </span>
      <p>
        <CodeEditor
          value={`const inputRef = useRef();\n\nreturn (\n <input type="text" ref={inputRef} />\n);`}
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
      <p className="fw-semibold">
        Case 2: Reading the Value of an Input Element:
      </p>
      <span className="d-block mb-2">
        • To get the value of an input element:
      </span>
      <p>
        <CodeEditor
          value={`const inputRef = useRef();\n\nconst handleClick = () => {\n const val = inputRef.current.value;\n console.log(val);\n};\n\nreturn (\n <div>\n   <input type="text" ref={inputRef} />\n   <button onClick={handleClick}>Get Input Value</button>\n </div>\n);`}
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
      <p className="fw-semibold">Case 3: Storing Mutable Values:</p>
      <span className="d-block mb-2">
        • Use <code>useRef()</code> to store any mutable value that does not
        trigger a re-render when changed.
      </span>
      <p>
        <CodeEditor
          value={`const countRef = useRef(0);\n\nconst incrementCount = () => {\n countRef.current++;\n console.log(countRef.current);\n};\n\nreturn (\n <button onClick={incrementCount}>Increment Count</button>\n);`}
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
      <p className="fw-semibold">
        Case 4: Keeping a Reference to Previous State:
      </p>
      <span className="d-block mb-2">
        • Track previous values across renders without causing re-renders.
      </span>
      <p>
        <CodeEditor
          value={`const [count, setCount] = useState(0);\nconst prevCountRef = useRef();\n\nuseEffect(() => {\n prevCountRef.current = count;\n}, [count]);\n\nconst prevCount = prevCountRef.current;`}
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
    </>
  );
};

export default HookUseRef;
