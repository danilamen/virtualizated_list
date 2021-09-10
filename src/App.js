import React from "react";
import List from "./List";

function App() {
  return (
    <div className="App" style={{ width: "200px", margin: "0 auto" }}>
      <List
        rowCount={100}
        rowHeight={32}
        rowRenderer={(rowIndex) => `Record ${rowIndex}`}
        width={200}
        height={600}
      />
    </div>
  );
}

export default App;
