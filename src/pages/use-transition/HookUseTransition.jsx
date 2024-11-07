import React, { useState, useTransition } from "react";
import About from "@/pages/use-transition/components/About";
import Posts from "@/pages/use-transition/components/Posts";
import Contact from "@/pages/use-transition/components/Contact";
import AlertMessage from "@/components/UI/AlertMessage";
import CodeEditor from "@uiw/react-textarea-code-editor";

const HookUseTransition = () => {
  console.log("Hook UseTransition is rendering");
  const [isPending, startTransition] = useTransition();
  const [currentTab, setCurrentTab] = useState(1);

  const selectTab = (tab) => {
    startTransition(() => {
      setCurrentTab(tab);
    });
  };

  return (
    <>
      <h2>
        <code>useTransition()</code>
      </h2>
      <ul className="mt-3">
        <li>
          <p>
            The <code>useTransition()</code> hook is a React Hook used for
            handling transitions, allowing you to manage UI state changes that
            are less urgent. It helps prioritize updates by marking certain
            state updates as &quot;transitional,&quot; which allows them to
            occur with lower priority. This can improve user experience in cases
            where immediate feedback is needed, like button clicks or input
            changes, without causing delays due to heavy UI updates.
          </p>
        </li>
      </ul>
      <span className="d-block my-2">Syntax:</span>
      <CodeEditor
        value={`const [isPending, startTransition] = useTransition();`}
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
      <ul className="mt-3">
        <li>
          <p>
            <code>isPending</code>: A boolean that indicates if the transition
            is still in progress.
          </p>
        </li>
        <li>
          <p>
            <code>startTransition</code>: A function that you wrap around
            updates that you want to mark as low-priority.
          </p>
        </li>
      </ul>

      <AlertMessage className="alert-warning p-4 my-4">
        <>
          <div className="d-flex align-items-center gap-3">
            <i className="bx bxs-message-error h4"></i> <h4>Warning</h4>
          </div>
          <p className="mt-1 fs-6">
            Using <code>useTransition()</code> will cause your component to
            render twice: once for the high-priority update and once for the
            low-priority update. Be mindful of potential performance
            implications when using it for large state changes.
          </p>
        </>
      </AlertMessage>

      <h3 className="my-4">
        Common Use Cases of <code>useTransition()</code>
      </h3>
      <p className="fw-semibold">
        Case 1: Handling Slow State Updates Without Blocking Fast Interactions
      </p>
      <span className="d-block mb-2">
        • Suppose you have a large list of items that can cause noticeable
        delays when rendered. Using <code>useTransition()</code>, you can defer
        this heavy UI update and prioritize quick actions, such as button
        clicks, ensuring the UI stays responsive.
      </span>

      <CodeEditor
        value={`import React, { useState, useTransition } from 'react';\n\nconst ListWithTransition = () => {\n  const [items, setItems] = useState([]);\n  const [isPending, startTransition] = useTransition();\n\n  const handleClick = () => {\n    startTransition(() => {\n      const newItems = Array.from({ length: 20000 }, (_, i) => 'Item ' + (i + 1));\n      setItems(newItems);\n    });\n  };\n\n  return (\n    <div>\n      <button onClick={handleClick}>Generate List</button>\n      {isPending && <p>Loading items...</p>}\n      <ul>\n        {items.map((item, index) => (\n          <li key={index}>{item}</li>\n        ))}\n      </ul>\n    </div>\n  );\n};`}
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

      <span className="d-block mb-2">
        In this example, clicking &quot;Generate List&quot; triggers a
        long-running update, but useTransition marks it as low priority,
        allowing the UI to remain responsive. While the list is generating,
        <code>isPending</code> is <code>true</code>, which can be used to show a
        loading indicator.
      </span>

      <p className="fw-semibold">
        Case 2: Improving Typing Performance in Search Filters
      </p>
      <span className="d-block mb-2">
        • If you&apos;re filtering a large list based on user input, frequent
        state updates can slow down typing. Using <code>useTransition()</code>{" "}
        to delay the filtering allows the input to remain responsive.
      </span>

      <CodeEditor
        value={`import React, { useState, useTransition } from 'react';\n\nconst SearchWithTransition = ({ items }) => {\n  const [query, setQuery] = useState('');\n  const [filteredItems, setFilteredItems] = useState(items);\n  const [isPending, startTransition] = useTransition();\n\n  const handleChange = (event) => {\n    const value = event.target.value;\n    setQuery(value);\n\n    startTransition(() => {\n      setFilteredItems(items.filter(item => item.includes(value)));\n    });\n  };\n\n  return (\n    <div>\n      <input type="text" value={query} onChange={handleChange} placeholder="Search..." />\n      {isPending && <p>Filtering items...</p>}\n      <ul>\n        {filteredItems.map((item, index) => (\n          <li key={index}>{item}</li>\n        ))}\n      </ul>\n    </div>\n  );\n};`}
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
      <span className="d-block mb-2">
        Here, <code>useTransition</code> ensures that typing in the search input
        is quick and smooth, while the filtering operation happens at a lower
        priority. The <code>isPending</code> flag can be used to show a
        &apos;Filtering items...&apos; message while the list is being updated.
      </span>

      <hr />

      <h3>
        <code>Example scenario in realworld projects. (Slow Posts Tab)</code>
      </h3>
      <div className="my-3 row">
        <div className="col-sm-12 mb-4">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                className={`nav-link ${currentTab === 1 ? "active" : ""}`}
                onClick={() => selectTab(1)}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${currentTab === 2 ? "active" : ""}`}
                onClick={() => selectTab(2)}
              >
                Posts (slow)
                {isPending && (
                  <div
                    className="spinner-border spinner-border-sm text-danger mx-1"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                )}
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${currentTab === 3 ? "active" : ""}`}
                onClick={() => selectTab(3)}
              >
                Contact
              </a>
            </li>
          </ul>
          <div
            className="border border-top-0 p-4 overflow-y-auto"
            style={{ height: "500px" }}
          >
            {currentTab === 1 ? (
              <About />
            ) : currentTab === 2 ? (
              <Posts />
            ) : (
              <Contact />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HookUseTransition;
