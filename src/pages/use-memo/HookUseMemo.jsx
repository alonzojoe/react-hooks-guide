import React from "react";
import WithoutUseMemo from "./components/WithoutUseMemo";

const HookUseMemo = () => {
  return (
    <>
      <h3>
        <i>Examples:</i>
      </h3>
      <div className="my-5 row">
        <div className="col-sm-12 col-md-6">
          <div className="d-flex justify-content-center">
            <WithoutUseMemo slowCalculation={slowCalculation} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HookUseMemo;

function slowCalculation(num) {
  console.log("slow calculation is triggered");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}
