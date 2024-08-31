import React, { useState } from "react";
import About from "@/pages/use-transition/components/About";
import Posts from "@/pages/use-transition/components/Posts";
import Contact from "@/pages/use-transition/components/Contact";

const HookUseTransition = () => {
  console.log("Hook UseTransition is rendering");

  const [currentTab, setCurrentTab] = useState(1);

  const selectTab = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <>
      <h3>
        <i>Examples:</i>
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
                Post
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${currentTab === 3 ? "active" : ""}`}
                onClick={() => selectTab(3)}
              >
                About
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
