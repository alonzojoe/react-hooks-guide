import React from "react";
import BreadCrumbs from "@/components/UI/BreadCrumbs";
import CodeEditor from "@uiw/react-textarea-code-editor";

const HookUseImperativeHandle = () => {
  return (
    <>
      <BreadCrumbs category="Hooks" name="useImperativeHandle()" />
      <h2>
        <code>useState()</code>
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
    </>
  );
};

export default HookUseImperativeHandle;
