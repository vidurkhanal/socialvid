import React from "react";
import "./WidgetItem.css";

function WidgetItem({ data }) {
  return (
    <div className="widgetItem">
      <div className="widgetItem__text">
        <div className="widgetItem__textHeader">
          <p>{data?.section}</p>
        </div>
        <div className="widgetItem__textBody">
          <h4>{data?.abstract.length >= 1 ? data?.abstract : data?.title}</h4>
        </div>
      </div>
      {data?.multimedia && (
        <div className="widgetItem__picture">
          <img src={data?.multimedia[data?.multimedia.length - 1].url} alt="" />
        </div>
      )}
    </div>
  );
}

export default WidgetItem;
