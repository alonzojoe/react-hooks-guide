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

      <h3>
        <i>Examples:</i>
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
