import React from "react";
import BreadCrumbs from "@/components/UI/BreadCrumbs";
import CodeEditor from "@uiw/react-textarea-code-editor";

const HookUseImperativeHandle = () => {
  return (
    <>
      <BreadCrumbs category="Hooks" name="useImperativeHandle()" />
      <h2>
        <code>useImperativeHandle()</code>
      </h2>
      <div className="mt-3">
        The <code>useImperativeHandle</code> is a React hook that allows you to
        customize the instance value that is exposed to parent components when
        using <code>ref</code>.
      </div>

      <span className="d-block my-2">Syntax:</span>

      <CodeEditor
        value={`useImperativeHandle(ref, () => ({ customMethod }));`}
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
        Common Use Cases of <code>useImperativeHandle()</code>
      </h3>

      <p className="fw-semibold">Case 1: Use Case with a Dependency Array.</p>
      <span className="d-block mb-2">
        • When you provide a dependency array,{" "}
        <code>useImperativeHandle()</code> will only update the methods or
        properties it exposes when one of the dependencies changes. This is
        useful for optimizing performance, as the exposed values will not be
        recalculated unless necessary.
      </span>

      <CodeEditor
        value={`import React, { forwardRef, useImperativeHandle, useRef } from 'react';\n\n// Input Component\nconst Input = forwardRef((props, ref) => {\n  const { value } = props;\n  const inputRef = useRef();\n\n  useImperativeHandle(ref, () => ({\n    customMethod: () => alert(\`Alerting the value: \${value}\`),\n  }), [value]);\n\n  return (\n    <input type="text" ref={inputRef} {...props} />\n  );\n});\n\nexport default Input;\n\n// Parent Component\nimport React, { useRef } from 'react';\nimport Input from './components/Input';\n\nconst ParentComponent = () => {\n  const inputRef = useRef();\n\n  const getValue = () => {\n    inputRef.current.customMethod();\n  };\n\n  return (\n    <div>\n      <Input ref={inputRef} value="Hello, world!" />\n      <button onClick={getValue}>Alert Value</button>\n    </div>\n  );\n};\n\nexport default ParentComponent;`}
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
      <p className="mb-5">
        In this example, customMethod will only be recalculated if{" "}
        <code>value</code> changes.
      </p>

      <p className="fw-semibold">
        Case 2: Use Case with an Empty Dependency Array <code>[]</code>.
      </p>
      <span className="d-block mb-2">
        • When an empty dependency array <code>[]</code> is provided,{" "}
        <code>useImperativeHandle()</code>
        will only run once, when the component mounts. This means the exposed
        methods or properties will not be recalculated on subsequent renders,
        ensuring that the methods or properties remain constant throughout the
        component's lifecycle.
      </span>

      <CodeEditor
        className="mb-5"
        value={`useImperativeHandle(ref, () => ({\n  customMethod: () => console.log('Custom method on mount'),\n}), []);`}
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
        Case 3: Use Case without a Dependency Array.
      </p>
      <span className="d-block mb-2">
        • If no dependency array is provided, <code>useImperativeHandle()</code>{" "}
        will update the exposed methods or properties on every render. This can
        be useful when you want to ensure that the latest version of the methods
        or properties is always exposed, even if no specific dependencies are
        involved.
      </span>

      <CodeEditor
        value={`useImperativeHandle(ref, () => ({\n  customMethod: () => console.log('Custom method on mount'),\n}));`}
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
    </>
  );
};

export default HookUseImperativeHandle;
