import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import "./Notepad.module.css"

const mkdStr = `
# Markdown Editor

---

**Hello world!!!**

[![](https://avatars.githubusercontent.com/u/1680273?s=80&v=4)]

`;

function App() {
  const [value, setValue] = useState(mkdStr);

  return (
    <div className="app-container">
      <div className="editor-container">
        
        <div data-color-mode="light">
          <MDEditor style={{width: 1516}} height={675} value={value} onChange={setValue} />
        </div>
        
      </div>
    </div>
  );
}

export default App;
