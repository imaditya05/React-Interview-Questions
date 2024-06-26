import { useState } from "react";
import { Item } from "../data/data";

interface FolderProps {
  explorerData: Item;
}

export default function Folder({ explorerData }: FolderProps) {
  const [expand, setExpand] = useState(false);
  if (explorerData.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <span className="folder" onClick={() => setExpand(!expand)}>
          🗂️ {explorerData.name}
        </span>
        <div style={{ display: expand ? "block" : "none", paddingLeft: "10px" }}>
          {explorerData.items?.map((exp) => {
            return <Folder explorerData={exp} key={exp.id} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄 {explorerData.name}</span>;
  }
}
