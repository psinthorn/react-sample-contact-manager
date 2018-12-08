import React from "react";

const ParamsIdTest = props => {
  return (
    <div className="display-4 mb-2">
      <div>This parameter is => {props.match.params.id}</div>
    </div>
  );
};

export default ParamsIdTest;
