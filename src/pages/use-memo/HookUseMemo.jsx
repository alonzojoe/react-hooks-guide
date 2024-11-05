import React from "react";
import WithoutUseMemo from "./components/WithoutUseMemo";
import WithUseMemo from "./components/WithUseMemo";
import CodeEditor from "@uiw/react-textarea-code-editor";

const HookUseMemo = () => {
  return (
    <>
      <h2>
        <code>useMemo()</code>
      </h2>
      <ul className="mt-3">
        <li>
          <p>
            <code>useMemo()</code> is a React Hook used to optimize performance
            by memoizing the result of a function. This means that it stores the
            computed result and recalculates it only when its dependencies
            change, rather than on every render. It helps avoid expensive
            calculations when the inputs haven’t changed.
          </p>
        </li>
      </ul>
      <span className="d-block my-2">Syntax:</span>
      <CodeEditor
        value={`const memoizedValue = useMemo(() => {\n  return computeExpensiveValue(a, b);\n}, [a, b]);`}
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

      <h3 className="my-4">
        Common Use Cases of <code>useMemo()</code>
      </h3>
      <p className="fw-semibold">
        Case 1: Avoiding Expensive Calculations on Every Render
      </p>
      <span className="d-block mb-2">
        • If you have a function with complex logic or heavy calculations, use
        useMemo to compute the result once and re-use it unless dependencies
        change.
      </span>

      <CodeEditor
        value={`const computeExpensiveValue = (a, b) => {\n  console.log('Computing...');\n  return a * b;\n};\n\nconst MyComponent = ({ a, b }) => {\n  const result = useMemo(() => computeExpensiveValue(a, b), [a, b]);\n\n  return <div>Result: {result}</div>;\n};`}
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

      <p className="fw-semibold">
        Case 2: Referential Equality for Dependency Arrays
      </p>
      <span className="d-block mb-2">
        • When passing values (like arrays or objects) as props to child
        components, use <code>useMemo()</code> to ensure the reference doesn’t
        change unless the values themselves change. This prevents unnecessary
        re-renders.
      </span>

      <CodeEditor
        value={`const MyComponent = ({ user }) => {\n  const memoizedUser = useMemo(() => ({ ...user }), [user]);\n\n  return <ChildComponent data={memoizedUser} />;\n};`}
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

      <p className="fw-semibold">Case 3: Optimizing Sorting and Filtering</p>
      <span className="d-block mb-2">
        • <code>useMemo()</code> is useful for optimizing list manipulations
        like sorting and filtering that may otherwise re-run every time the
        component re-renders.
      </span>

      <CodeEditor
        value={`const MyComponent = ({ list }) => {\n  const filteredList = useMemo(() => {\n    return list.filter(item => item.active);\n  }, [list]);\n\n  return (\n    <ul>\n      {filteredList.map(item => (\n        <li key={item.id}>{item.name}</li>\n      ))}\n    </ul>\n  );\n};`}
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

      <hr />

      <h3>
        <code>
          Example in realworld projects (without <code>useMemo()</code> VS. with{" "}
          <code>useMemo()</code>)
        </code>
      </h3>
      <div className="my-3 row">
        <div className="col-sm-12 col-md-6 mb-4">
          <div className="d-flex justify-content-center">
            <WithoutUseMemo slowCalculation={slowCalculation} />
          </div>
        </div>
        <div className="col-sm-12 col-md-6 mb-4">
          <div className="d-flex justify-content-center">
            <WithUseMemo slowCalculation={slowCalculation} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HookUseMemo;

function slowCalculation(num) {
  console.log("slow calculation is triggered");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}
