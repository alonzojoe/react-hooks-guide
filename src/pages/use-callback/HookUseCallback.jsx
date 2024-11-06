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

      <h3 className="my-4">
        Common Use Cases of <code>useCallback()</code>
      </h3>
      <p className="fw-semibold">
        Case 1: Preventing Unnecessary Re-Renders in Child Components
      </p>
      <span className="d-block mb-2">
        • When passing a function as a prop to a child component, the child may
        re-render every time the parent re-renders because the function is
        considered a new reference. Using <code>useCallback()</code> ensures the
        function reference remains the same across renders unless dependencies
        change, preventing unnecessary re-renders of the child component.
      </span>
      <span className="d-block mb-2">
        • For instance, in the example below, the WithUseCallback component has
        a function getList that generates a list of numbers based on the current
        count. Since getList is wrapped with useCallback, it only re-creates
        when count changes. This way, the ListItems child component doesn’t
        re-render unless necessary.
      </span>

      <CodeEditor
        value={`const WithUseCallback = () => {\n  const [count, setCount] = useState(0);\n\n  const getList = useCallback(\n    (increment) => {\n      return [count + increment, count + increment + 1, count + increment + 2];\n    },\n    [count]\n  );\n\n  return (\n    <div>\n      <button onClick={() => setCount(count + 1)}>Increment Count</button>\n      <ListItems getList={getList} />\n    </div>\n  );\n};\n\nconst ListItems = ({ getList }) => {\n  const [items, setItems] = useState([]);\n\n  useEffect(() => {\n    console.log("Updating Items...");\n    setItems(getList(1));\n  }, [getList]);\n\n  return (\n    <ul className="px-2" style={{ listStyle: "none" }}>\n      {items.map((item) => (\n        <li key={item}>{item}</li>\n      ))}\n    </ul>\n  );\n};`}
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
        Case 2: Optimizing Event Handlers in Components
      </p>
      <span className="d-block mb-2">
        • <code>useCallback()</code> can optimize event handlers like onClick or
        onSubmit that don’t need to be re-created on every render, especially
        useful when dealing with large lists or complex UI components.
      </span>

      <CodeEditor
        value={`const MyComponent = () => {\n  const handleSubmit = useCallback((event) => {\n    event.preventDefault();\n    console.log('Form submitted');\n  }, []);\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <button type="submit">Submit</button>\n    </form>\n  );\n};`}
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
        Case 3: Memoizing Functions Used in useEffect
      </p>
      <span className="d-block mb-2">
        • If you need to use a function in <code>useEffect()</code> with
        dependencies, <code>useCallback()</code> can help ensure that the
        function reference remains stable, avoiding unnecessary effects.
      </span>

      <CodeEditor
        value={`const MyComponent = ({ dependency }) => {\n  const fetchData = useCallback(() => {\n    console.log('Fetching data...');\n  }, [dependency]);\n\n  useEffect(() => {\n    fetchData();\n  }, [fetchData]);\n\n  return <div>Data fetched</div>;\n};`}
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
      <span className="d-block mb-2">
        • Open browser developer tools and check console and compare the two
        when toggling the `Change Background`.
      </span>
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
