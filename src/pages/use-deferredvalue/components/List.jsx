import React, { useDeferredValue, useEffect, useMemo } from "react";

const MAX_LENGTH = 20000;

const List = ({ query }) => {
  const deferredQuery = useDeferredValue(query);

  const listItems = useMemo(() => {
    let items = [];

    for (let i = 0; i < MAX_LENGTH; i++) {
      items.push(<div key={i}>{deferredQuery}</div>);
    }

    return items;
  }, [deferredQuery]);

  useEffect(() => {
    console.log(`Query: ${query}\nDeferred Query: ${deferredQuery}`);
  }, [query, deferredQuery]);

  return listItems;
};

export default List;
