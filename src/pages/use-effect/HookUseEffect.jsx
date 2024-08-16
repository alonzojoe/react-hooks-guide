import React from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

const HookUseEffect = () => {
  const code = `useEffect(() => {\n  // Your effect logic here\n}, [dependencies]);`;

  return (
    <>
      <h2>
        <code>useEffect()</code>
      </h2>
      <p className="mt-3">
        The <code>useEffect()</code> hook is a React which let us run side
        Effects in our components.
      </p>
      <h3 className="mt-2">
        But what are <code>Side Effects</code>?
      </h3>
      <p>
        <code>Side effects</code> are those actions performed by the component
        to affect something outside of the component itself like updating state,
        calling an API, working with caches, modifying DOM etc.
      </p>
      <p>
        In Simple words, any action which connects the component to the outside
        world is a <code>Side Effect</code>.
      </p>
      <span className="d-block my-2">Syntax:</span>
      <p>
        <CodeEditor
          value={code}
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
      <span>
        The <code>useEffect()</code> Hook has takes two arguments:
      </span>
      <ul>
        <li>
          <code>function()</code>: First argument is a function which you want
          to execute whenever <code>useEffect()</code> runs.
        </li>
        <li>
          <code>[dependencies]</code>: Second argument is an array of
          dependencies
        </li>
      </ul>
      <h3 className="my-4">
        3 Cases of <code>useEffect()</code>
      </h3>
      <p className="fw-semibold">
        Case 1: Passing an array of dependencies <code>dependencies</code>.
      </p>

      <p>
        <CodeEditor
          value={`useEffect(() => {\n  console.log('test');\n}, [state]);`}
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
      <span className="d-block">Order of execution</span>
      <ul>
        <li>
          &quot;<code>useFffect()</code>in the house will console out&quot;
          because component renders for the first time.
        </li>
        <li>
          Now, whenever the dependency array changes which mean the state
          changes, <code>useEffect()</code> will execute and console out
          &quot;test&quot;
        </li>
      </ul>
      <p className="fw-semibold">
        Case 2: Passing an <code>empty array[]</code>.
      </p>
      <p>
        <CodeEditor
          value={`useEffect(() => {\n  console.log('Component renders at first time');\n}, []);`}
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
      <span className="d-block">Order of execution</span>
      <ul>
        <li>
          &quot;<code>useFffect()</code>in the house will console out&quot;
          because component renders for the first time.
        </li>
        <li>
          Now, there is no state inside the dependency array so{" "}
          <code>useEffect()</code> will never run again.
        </li>
      </ul>
      <p className="fw-semibold">
        Case 3: Passing no <code>array.</code>.
      </p>
      <p>
        <CodeEditor
          value={`useEffect(() => {\n  console.log('Component re-renders');\n});`}
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
      <span className="d-block">Order of execution</span>
      <ul>
        <li>
          &quot;<code>useFffect()</code>in the house will console out&quot;
          because component renders for the first time.
        </li>
        <li>
          Now, there is no array available so <code>useEffect()</code> will run
          everytime when the component re-renders.
        </li>
      </ul>
      <h3 className="my-4">
        The Cleanup Function in <code>useEffect()</code>
      </h3>
      <ul>
        <li>
          <code>Cleanup Function</code> in useEffect is an optional function
          that can be returned from the <code>useEffect()</code> hook.
        </li>
        <li>
          This function is used to perform necessary cleanups, such as removing
          <code>eventListeners</code>, clearing <code>intervals/timeouts</code>,
          etc., after the side effect executes.
        </li>
      </ul>
      <p>
        <CodeEditor
          value={`useEffect(() => {\n  // side effects\n  return () => {\n    // clean up function\n  };\n}, []);`}
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
      <span className="d-block">Example</span>
      <p>
        <CodeEditor
          value={`useEffect(() => {\n  const interval = setInterval(() => {\n    // executes every 1 second\n  }, 1000);\n\n  return () => {\n    clearInterval(interval);\n  };\n}, []);`}
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
      <span className="d-block">Order of execution</span>
      <ul>
        <li>
          First <code>useEffect()</code> runs on the first render and after that{" "}
          <code>cleanup function</code> executes.
        </li>
        <li>
          Now, whenever the compoent re-renders, first{" "}
          <code>cleanup function</code> will executes and then the{" "}
          <code>useEffect()</code>
        </li>
      </ul>
    </>
  );
};

export default HookUseEffect;
