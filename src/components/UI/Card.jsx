import React from "react";

const Card = ({ className, children, style }) => {
  const combinedClass = `card ${className}`;
  return (
    <div className={combinedClass} style={{ ...style }}>
      {children}
    </div>
  );
};

export default Card;
