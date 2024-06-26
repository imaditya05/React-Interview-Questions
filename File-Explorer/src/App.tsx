import { useState } from "react";
import "./App.css";
import explorer from "./data/data";
import Folder from "./components/Folder";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  return (
    <div>
      <Folder explorerData={explorerData} />
    </div>
  );
}

export default App;
