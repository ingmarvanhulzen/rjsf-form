import React from "react";

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
        <a className="Forward" href="/">
          Opslaan
        </a>
      </div>
    </div>
  );
}

export default ObjectFieldTemplate;
