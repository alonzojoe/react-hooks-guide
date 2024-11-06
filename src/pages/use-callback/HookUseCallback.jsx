import React from "react";
import WithUseCallback from "@/pages/use-callback/components/WithUseCallback";
import WithoutUseCallback from "@/pages/use-callback/components/WithoutUseCallback";
import CodeEditor from "@uiw/react-textarea-code-editor";

const HookUseCallback = () => {
  return (
    <>
      <h2>
        <code>useCallback()</code>
      </h2>
      <ul className="mt-3">
        <li>
          <p>
            <code>useCallback()</code> is a React Hook that memoizes a function
            so it doesn’t get re-created on every render. It returns a memoized
            version of the callback function that only changes if one of the
            dependencies changes. This can improve performance by preventing
            unnecessary re-renders in child components that rely on the same
            function reference.
          </p>
        </li>
      </ul>

      <span className="d-block my-2">Syntax:</span>
      <CodeEditor
        value={`const memoizedCallback = useCallback(() => {\n  // Callback logic here\n}, [dependencies]);`}
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
          Example Scenario w/o<code>useCallback()</code> VS. w/
          <code>useCallback()</code>
        </code>
      </h3>
      <div className="my-3 row">
        <div className="col-sm-12 col-md-6 mb-4">
          <div className="d-flex justify-content-center">
            <WithoutUseCallback />
          </div>
        </div>
        <div className="col-sm-12 col-md-6 mb-4">
          <div className="d-flex justify-content-center">
            <WithUseCallback />
          </div>
        </div>
      </div>
    </>
  );
};

export default HookUseCallback;
