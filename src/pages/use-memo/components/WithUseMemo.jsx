import React, { useState, useMemo, useEffect } from "react";
import Card from "@/components/UI/Card";

const WithUseMemo = ({ slowCalculation }) => {
  console.log("Component With useMemo is rendering...");

  const [count, setCount] = useState(0);
  const [lightMode, setLightMode] = useState(false);
  const doubleCount = useMemo(() => {
    return slowCalculation(count);
  }, [count]);
  const themeStyle = useMemo(() => {
    return {
      background: lightMode ? "white" : "black",
      color: lightMode ? "black" : "white",
    };
  }, [lightMode]);

  useEffect(() => {
    console.log("Background has been changed!");
  }, [themeStyle]);

  return (
    <Card className="shadow py-2" style={{ width: "100%" }}>
      <div className="card-body">
        <h5 classname="card-title">
          With <code>useMemo()</code>
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
            Change Background
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

export default WithUseMemo;
