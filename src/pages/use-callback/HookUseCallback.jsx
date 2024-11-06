import React from "react";
import WithUseCallback from "@/pages/use-callback/components/WithUseCallback";
import WithoutUseCallback from "@/pages/use-callback/components/WithoutUseCallback";

const HookUseCallback = () => {
  return (
    <>
      <h3>
        <i>Examples:</i>
      </h3>
      <div className="my-3 row">
        <div className="col-sm-12 col-md-6 mb-4">
          <div className="d-flex justify-content-center">
            <WithUseCallback />
          </div>
        </div>
        <div className="col-sm-12 col-md-6 mb-4">
          <div className="d-flex justify-content-center">
            <WithoutUseCallback />
          </div>
        </div>
      </div>
    </>
  );
};

export default HookUseCallback;
