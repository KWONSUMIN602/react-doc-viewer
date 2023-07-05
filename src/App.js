import "./index.css";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
// import React, { useState } from "react";

export default function App() {
  const docs = [
    { uri: require("./sample.pdf") },
    { uri: require("./sample3.txt") },
    { uri: require("./file-sample.doc") },
    { uri: require("./test.docx") },
    { uri: require("./sample3.xlsx") },
  ];

  // const [selectedDocs, setSelectedDocs] = useState([]);

  const MyNoRenderer = ({ document, fileName }) => {
    const fileText = fileName || document?.fileType || "";

    if (fileText) {
      return <div>No Renderer Error! ({fileText})</div>;
    }

    return <div>No Renderer Error!</div>;
  };

  const MyLoadingRenderer = ({ document, fileName }) => {
    const fileText = fileName || document?.fileType || "";

    if (fileText) {
      return <div>Loading Renderer ({fileText})...</div>;
    }

    return <div>Loading Renderer...</div>;
  };

  return (
    <div className="App">
      <h1>viewer-test</h1>

      <>
        {/* <input
          type="file"
          accept=".pdf,.xlsx,.doc,.docx,.txt"
          multiple
          onChange={(el) =>
            el.target.files?.length &&
            setSelectedDocs(Array.from(el.target.files))
          }
        /> */}

        <DocViewer
          pluginRenderers={DocViewerRenderers}
          documents={docs}
          // documents={selectedDocs.map((file) => ({
          //   uri: window.URL.createObjectURL(file),
          //   fileName: file.name,
          // }))}
          config={{
            loadingRenderer: {
              overrideComponent: MyLoadingRenderer,
              showLoadingTimeout: false, // false if you want to disable or number to provide your own value (ms)
            },
            noRenderer: {
              overrideComponent: MyNoRenderer,
            },
          }}
        />
      </>
    </div>
  );
}
