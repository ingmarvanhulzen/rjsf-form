import React from "react";

function StepObjectFieldTemplate({ title, properties }) {
  const [index, setIndex] = React.useState(0);

  const goBack = React.useCallback(
    (event) => {
      event.preventDefault();

      if (index > 0) {
        setIndex(index - 1);
      }
    },
    [index, setIndex]
  );

  const goForward = React.useCallback(
    (event) => {
      event.preventDefault();

      if (index < properties.length - 1) {
        setIndex(index + 1);
      }
    },
    [properties, index, setIndex]
  );

  return (
    <div className="Container">
      <div className="Heading">
        <span>{title}</span>
      </div>
      <div className="Content">{properties[index].content}</div>
      <div className="Navigation">
        <a className="Backward" onClick={goBack} href="/">
          Vorige
        </a>
        <a className="Forward" onClick={goForward} href="/">
          Volgende
        </a>
      </div>
    </div>
  );
}

export default StepObjectFieldTemplate;
