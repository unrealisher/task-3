import React from "react";

const Item = ({ data, id }) => {
  const date = ({ monthStart, dayStart, monthEnd, dayEnd }) => {
    if (monthEnd === null) {
      return monthStart + " " + dayStart;
    } else if (monthEnd === monthStart) {
      return monthStart + " " + dayStart + " - " + dayEnd;
    } else {
      return monthStart + " " + dayStart + " - " + monthEnd + " " + dayEnd;
    }
  };

  const renderItem = (
    <li key={id} className="item">
      <h3 className="item__name">{data.title}</h3>
      <p className="item__place">
        {data.place}・{date(data)}
      </p>
      <p className="item__theme">#{data.theme}</p>
    </li>
  );

  return <React.Fragment>{renderItem}</React.Fragment>;
};

export default Item;
