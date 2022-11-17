import React from "react";
import Form from "@rjsf/core";

import ObjectFieldTemplate from "./templates/ObjectFieldTemplate";
import StepObjectFieldTemplate from "./templates/StepObjectFieldTemplate";

import schema from "./schema.json";
import uiSchema from "./ui_schema.json";

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
