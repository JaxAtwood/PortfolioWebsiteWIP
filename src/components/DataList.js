import React from "react";

import Lines from "./Line";

const DataList = props => {
  return (
    <div>
      {props.lines.map(item => {
        return <Lines item={item} key={item.id} />;
      })}
    </div>
  );
};

export default DataList;
