import React from "react";

import Lines from "./Line";

class DataList extends React.Component (props) {

render() {
  return (
    <div>
      {this.props.lines.map(item => {
        return <Lines item={item} key={item.id} />;
      })}
    </div>
  )
  }
};

export default DataList;
