import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <svg>
        <rect></rect>
        <text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle">
          TRAY
        </text>
      </svg>
    </div>
  );
};

export default Loading;
