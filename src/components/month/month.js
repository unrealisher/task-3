import React from "react";

import Item from "../item";

const Month = ({ data }) => {
  let arr = [];
  let id = 0;
  data.forEach(item => {
    arr.push(<Item data={item} key={id++} />);
  });

  return <ul className="month__data">{arr}</ul>;
};

export default Month;
