import React, { useMemo } from "react";

const MAX_LENGHT = 20000;

const List = ({ query }) => {
  const listItems = useMemo(() => {
    let items = [];

    for (let i = 0; i < MAX_LENGHT; i++) {
      items.push(<div key={i}>{query}</div>);
    }

    return items;
  }, [query]);

  return listItems;
};

export default List;
