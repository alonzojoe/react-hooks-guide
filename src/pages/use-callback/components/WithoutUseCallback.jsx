import React, { useState, useCallback } from "react";
import Card from "@/components/UI/Card";
import ListItems from "@/pages/use-callback/components/ListItems";
const WithUseCallback = () => {
  const [count, setCount] = useState(0);
  const [lightMode, setLightMode] = useState(false);

  const getList = (increment) => {
    return [count + increment, count + increment + 1, count + increment + 2];
  };

  const themeStyle = {
    background: lightMode ? "white" : "black",
    color: lightMode ? "black" : "white",
  };

  return (
    <Card className="shadow py-2" style={{ width: "100%" }}>
      <div className="card-body">
        <h5 className="card-title">
          Without <code>useCallback()</code>
        </h5>
        <div className="d-flex justify-content-center flex-column gap-3">
          <div className="form-group">
            <label className="mb-2">Input Number:</label>
            <input
              type="number"
              className="form-control"
              value={count}
              onChange={(e) => setCount(parseInt(e.target.value))}
            />
          </div>
          <button
            className="btn btn-sm btn-secondary"
            onClick={() => setLightMode((prev) => !prev)}
          >
            Change Background
          </button>
          <div style={themeStyle}>
            <ListItems getList={getList} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WithUseCallback;
