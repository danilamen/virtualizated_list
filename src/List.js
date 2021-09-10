import React, { useState } from "react";

function List({ rowCount, rowHeight, rowRenderer, width, height }) {
  const [scrollTop, setScrollTop] = useState(0);
  //   const [items, setItems] = useState();

  const innerHeight = rowCount * rowHeight;
  const startIndex = Math.floor(scrollTop / rowHeight);
  const endIndex = Math.min(
    rowCount - 1,
    Math.floor((scrollTop + height) / rowHeight)
  );

  //   const visibleItems = useMemo(() => {
  //     const items = [];
  //     for (let i = startIndex; i <= endIndex; i++) {
  //       console.log("newItems");
  //       items.push(
  //         <li
  //           style={{
  //             position: "absolute",
  //             top: `${i * rowHeight}px`,
  //             height: rowHeight,
  //           }}
  //         >
  //           {rowRenderer(i)}
  //         </li>
  //       );
  //     }
  //     setItems(items);
  //   }, [startIndex, endIndex]);

  const items = [];
  for (let i = startIndex; i <= endIndex; i++) {
    console.log("newItems");
    items.push(
      <li
        style={{
          position: "absolute",
          top: `${i * rowHeight}px`,
          height: rowHeight,
        }}
      >
        {rowRenderer(i)}
      </li>
    );
  }

  const onScroll = (e) => setScrollTop(e.currentTarget.scrollTop);

  return (
    <div
      style={{ overflow: "auto", height, border: "1px solid black", width }}
      onScroll={onScroll}
    >
      <ul
        className="inner"
        style={{
          position: "relative",
          height: `${innerHeight}px`,
        }}
      >
        <li>{items}</li>
      </ul>
    </div>
  );
}

export default List;
