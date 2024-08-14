import React, { useEffect } from "react";
import Astraunut from "@/assets/images/astronautx.png";

const NotFound = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "90vh", overflow: "hidden" }}
    >
      <div className="d-flex gap-2 justify-content-center align-items-center arrangement">
        <img
          src={Astraunut}
          className="img-fluid"
          style={{ height: "300px", width: "auto" }}
          alt="astraunut"
        />
        <div className="text-center">
          <h1 style={{ fontSize: "180px" }}>404</h1>
          <p className="fs-5">
            Oops! The page you're looking for doesn't exist.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
