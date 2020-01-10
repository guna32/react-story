import React from "react";
import "./style.css";

const CountBanner = props => {
  const colors = [
    "#ff0000",
    "#ffa500",
    "#ffff00",
    "#008000",
    "#0000ff",
    "#4b0082",
    "#ee82ee"
  ];
  let countArray = new Array(props.count).fill(0);
  return (
    <div className="countFlex">
      <h1>{props.count}</h1>
      <div className="blockWrap">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {countArray.map((count, i) => (
            <div
              className="tinyBlock"
              style={{ background: colors[i % colors.length] }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CountBanner;
