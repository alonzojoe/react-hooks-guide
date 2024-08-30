import React, { useState } from "react";
import Card from "@/components/UI/Card";

const WithoutUseMemo = ({ slowCalculation }) => {
  console.log("Component Without useMemo is rendering...");

  const [count, setCount] = useState(0);
  const [lightMode, setLightMode] = useState(false);
  const doubleCount = slowCalculation(count);
  const themeStyle = {
    background: lightMode ? "white" : "black",
    color: lightMode ? "black" : "white",
  };

  return (
    <Card className="shadow py-4" style={{ width: "20rem" }}>
      <div className="card-body">
        <h5 classname="card-title">
          Without <code>useMemo()</code>
        </h5>
        <div className="d-flex justify-content-center flex-column gap-3">
          <div className="form-group">
            <label className="mb-2">Input Number:</label>
            <input
              type="number"
              className="form-control"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
          </div>
          <button
            className="btn btn-sm btn-secondary"
            onClick={() => setLightMode((prev) => !prev)}
          >
            Change Theme
          </button>
          <div className="form-group">
            <label className="mb-2">Double Count:</label>
            <div style={themeStyle}>{doubleCount}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WithoutUseMemo;
