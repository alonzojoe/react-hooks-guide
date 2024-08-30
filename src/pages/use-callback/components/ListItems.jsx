import React, { useState, useEffect } from "react";

const ListItems = ({ getList }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("Updating Items...");
    setItems(getList());
  }, [getList]);

  return (
    <ul className="px-2" style={{ listStyle: "none" }}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default ListItems;
