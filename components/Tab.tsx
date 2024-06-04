"use client";
import React, { useState } from "react";

export default function Tab({ myProxiesComponent, dashboardComponent }) {
  const [activeTab, setActiveTab] = useState("dashboard");
  return (
    <div>
      <div className="tabs">
        <button onClick={() => setActiveTab("myProxies")}>My Proxies</button>
        <button onClick={() => setActiveTab("dashboard")}>Dashboard</button>
      </div>
      <div className="tab-content">
        {activeTab === "myProxies" && myProxiesComponent}
        {activeTab === "dashboard" && dashboardComponent}
      </div>
    </div>
  );
}
