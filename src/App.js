import React from "react";
import Form from "@rjsf/core";

import schema from "./schema.json";
import uiSchema from "./ui_schema.json";

function StepObjectFieldTemplate({ title, properties }) {
  const [index, setIndex] = React.useState(0);

  const goBack = React.useCallback(() => {
    if (index > 0) {
      setIndex(index - 1);
    }
  }, [properties, index, setIndex]);

  const goForward = React.useCallback(() => {
    if (index < properties.length - 1) {
      setIndex(index + 1);
    }
  }, [properties, index, setIndex]);

  return (
    <div className="Container">
      <div className="Heading">
        <span>{title}</span>
      </div>
      <div className="Content">{properties[index].content}</div>
      <div className="Navigation">
        <a className="Backward" onClick={goBack}>
          Vorige
        </a>
        <a className="Forward" onClick={goForward}>
          Volgende
        </a>
      </div>
    </div>
  );
}

function ObjectFieldTemplate({ title, properties }) {
  return (
    <div className="Container">
      <div className="Heading">
        <span>{title}</span>
      </div>
      <div className="Content">
        {properties.map((propertie) => propertie.content)}
      </div>
      <div className="Navigation">
        <a className="Forward">Opslaan</a>
      </div>
    </div>
  );
}

function App() {
  return (
    <Form
      schema={schema}
      uiSchema={uiSchema}
      ObjectFieldTemplate={StepObjectFieldTemplate}
    />
  );
}

export default App;
