import React, { useRef } from "react";
import BreadCrumbs from "@/components/UI/BreadCrumbs";
import CodeEditor from "@uiw/react-textarea-code-editor";
import AlertMessage from "@/components/UI/AlertMessage";

const HookUseId = () => {
  return (
    <>
      <BreadCrumbs category="Hooks" name="useId()" />
      <h2>
        <code>useId()</code>
      </h2>
      <div className="mt-3">
        The <code>useId()</code> is a React hook that generates a unique ID
        string for accessibility purposes, ensuring that ID attributes are
        unique across server and client renders. It is particularly useful for
        associating labels with form elements or handling ARIA attributes.
      </div>
      <span className="d-block my-2">Syntax:</span>
      <CodeEditor
        value={`const uniqueId = useId(); //example output ':r1:'`}
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
      <AlertMessage className="alert-warning p-4 my-4">
        <>
          <div className="d-flex align-items-center gap-3">
            <i className="bx bxs-message-error h4"></i>
            <h4>Warning</h4>
          </div>
          <p className="mt-1 fs-6">
            Do not use useId to generate keys in a list. Keys should be stable
            across renders, while useId is designed to create unique,
            unpredictable IDs.
          </p>
        </>
      </AlertMessage>

      <h3 className="my-4">
        Common Use Cases of <code>useId()</code>
      </h3>

      <p className="fw-semibold">Case 1: Single Input and Label Association.</p>
      <span className="d-block mb-2">
        • When creating a form input with a label, <code>useId()</code> helps in
        generating a unique ID for associating the label with the input field:
      </span>

      <CodeEditor
        value={`import React, { useId } from 'react';\n\const App = () => {\n  const inputId = useId();\n\n  return (\n    <div>\n      <label htmlFor={inputId}>Name:</label>\n      <input id={inputId} type="text" />\n    </div>\n  );\n}`}
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

      <p className="mt-4 fw-semibold">
        Case 2: ARIA-Labeled Input for Accessibility.
      </p>
      <span className="d-block mb-2">
        • Use <code>useId()</code> to create a unique ID that connects an input
        with an ARIA label to provide better accessibility for screen readers:
      </span>

      <CodeEditor
        value={`import React, { useId } from 'react';\n\nconst App = () => {\n  const inputId = useId();\n  const labelId = \`\${inputId}-label\`;\n\n  return (\n    <div>\n      <span id={labelId}>Enter your email:</span>\n      <input type="email" aria-labelledby={labelId} />\n    </div>\n  );\n};`}
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

      <p className="mt-4 fw-semibold">Case 3: Form with Multiple Inputs.</p>
      <span className="d-block mb-2">
        • When working with a form containing multiple inputs, there is no need
        to call <code>useId()</code> multiple times. Instead, you can create a
        base ID and use template literals to generate unique IDs for each input:
      </span>

      <CodeEditor
        value={`import React, { useId } from 'react';\n\nconst RegistrationForm = () => {\n  const uniqueId = useId();\n\n  return (\n    <form>\n      <div>\n        <label htmlFor={\`\${uniqueId}-first-name\`}>First Name:</label>\n        <input id={\`\${uniqueId}-first-name\`} type="text" />\n      </div>\n      <div>\n        <label htmlFor={\`\${uniqueId}-last-name\`}>Last Name:</label>\n        <input id={\`\${uniqueId}-last-name\`} type="text" />\n      </div>\n      <div>\n        <label htmlFor={\`\${uniqueId}-email\`}>Email:</label>\n        <input id={\`\${uniqueId}-email\`} type="email" />\n      </div>\n      <div>\n        <label htmlFor={\`\${uniqueId}-password\`}>Password:</label>\n        <input id={\`\${uniqueId}-password\`} type="password" />\n      </div>\n    </form>\n  );\n};`}
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

export default HookUseId;
