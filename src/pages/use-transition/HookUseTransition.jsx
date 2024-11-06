import React, { useState, useTransition } from "react";
import About from "@/pages/use-transition/components/About";
import Posts from "@/pages/use-transition/components/Posts";
import Contact from "@/pages/use-transition/components/Contact";

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
      <hr />

      <h3>
        <code>Example scenario in realworld projects.</code>
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
