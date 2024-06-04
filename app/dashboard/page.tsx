import axios from "axios";
import Sidebar from "@/components/Sidebar";
import LinedummyChart from "@/components/LinedummyChart";
import ActionDropdown from "@/components/ActionDropdown";
import { fetchInfoData, fetchTableData } from "@/actions";
import TableData from "@/components/TableData";
import Tab from "@/components/Tab";
import TableInfo from "@/components/TableInfo";

const Dashboard = async () => {
  const { data, error } = await fetchTableData();
  const { data: infoData, error: infoError } = await fetchInfoData();
  if (error || infoError) {
    return <div>Error: {error || infoError}</div>;
  }

  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <span>Proxies & Scraping Infrastructure</span>
        <Tab
          myProxiesComponent={
            <div>
              <h2>Zeynep</h2>
            </div>
          }
          dashboardComponent={
            <div>
              <TableInfo data={infoData} />
              <LinedummyChart />
              <TableData data={data} />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Dashboard;
