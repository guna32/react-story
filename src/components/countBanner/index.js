import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const CountBanner = ({ count }) => {
  const colors = [
    "#ff0000",
    "#ffa500",
    "#ffff00",
    "#008000",
    "#0000ff",
    "#4b0082",
    "#ee82ee"
  ];
  let countArray = new Array(count).fill(0);
  return (
    <div className="countFlex">
      <h1>{count}</h1>
      <div className="blockWrap">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {countArray.map((c, i) => (
            <div
              key={i}
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

CountBanner.propTypes = {
  count: PropTypes.number
};

CountBanner.defaultProps = {
  count: 0
};
