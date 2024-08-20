import React from "react";

const BreadCrumbs = ({ category, name }) => {
  return (
    <div className="d-flex align-items-center mb-2 bread-crumbs">
      <span>{category}</span> <i className="bx bx-chevron-right fs-5"></i>{" "}
      <span>{name}</span>
    </div>
  );
};

export default BreadCrumbs;
