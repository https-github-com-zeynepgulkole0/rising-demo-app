import React from "react";

export default function TableInfo({ data }) {
  return (
    <div className="get_info">
      {/* <h2>Info Data</h2> */}
      {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
      <div className="info_box">
        <span className="info_title">Subscription expires on</span>
        <span className="info_value">{data.expireTime}</span>
      </div>
      <div className="info_box">
        <span className="info_title">Last charge</span>
        <span className="info_value">
          {data.lastChargeAmount}
          {data.lastCharge}
        </span>
      </div>
      <div className="info_box">
        <span className="info_title">Total Usage Data</span>
        <span className="info_value">{data.totalDataUsage} GB</span>
      </div>
      <div className="info_box">
        <span className="info_title">Daily Usage Data</span>
        <span className="info_value">{data.dailyUsage} GB</span>
      </div>
    </div>
  );
}
