import React from "react";

function props(prop) {
  return (
    <div>
      <h1>The name is : {prop.name}</h1>
      <h1>The job is : {prop.job}</h1>
    </div>
  );
}

export default props;
