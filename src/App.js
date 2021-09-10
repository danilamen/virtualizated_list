import React from "react";
import List from "./List.js";

function App() {
  return (
    <div className="App" style={{ width: "200px", margin: "0 auto" }}>
      <List
        rowCount={100000}
        rowHeight={32}
        rowRenderer={(index) => `Record ${index}`}
        width={200}
        height={600}
      />
    </div>
  );
}

export default App;
