"use client";
import React from "react";
import ActionDropdown from "./ActionDropdown";

export default function TableData({ data }) {
  console.log("TableData received data:", data);

  return (
    <div className="table_container">
      <span>Transactions History</span>
      {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
      <table className="table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Location</th>
            <th>Rental Period</th>
            <th>Number of IP</th>
            <th>Specific Purpose</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data.data) && data.data.length > 0 ? (
            data.data.map((item, index) => (
              <tr key={index}>
                <td>{item.type}</td>
                <td>{item.location}</td>
                <td>{item.rental}</td>
                <td>{item.ipcount}</td>
                <td>{item.purpose}</td>
                <td>{item.date}</td>
                <td>
                  <ActionDropdown />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
