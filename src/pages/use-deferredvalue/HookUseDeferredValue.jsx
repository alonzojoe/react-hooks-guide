import React, { useState } from "react";
import List from "@/pages/use-deferredvalue/components/List";

const HookUseDeferredValue = () => {
  const [query, setQuery] = useState();

  return (
    <>
      <h3>
        <i>Examples:</i>
      </h3>
      <div className="my-3 row">
        <div className="col-sm-12 mb-4">
          <div
            className="border p-4 overflow-y-auto"
            style={{ height: "500px" }}
          >
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-sm"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                placeholder="Type Something..."
              />
              <List query={query} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HookUseDeferredValue;
