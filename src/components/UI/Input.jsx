/* eslint-disable react/display-name */
import React from "react";

const Input = React.forwardRef((props, ref) => {
  const combineClass = `form-control ${props.className ? props.className : ""}`;

  return <input ref={ref} {...props} className={combineClass} />;
});

export default Input;
