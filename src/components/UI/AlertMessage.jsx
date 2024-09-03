import React from "react";

const AlertMessage = ({ className, children }) => {
  const combinedClass = `alert ${className}`;
  return <div className={combinedClass}>{children}</div>;
};

export default AlertMessage;
