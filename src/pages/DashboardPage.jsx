import StatsCard from "../components/dashboard/StatsCard";
import Chart from "../components/dashboard/Chart";
import Table from "../components/dashboard/Table";
import Insights from "../components/dashboard/Insights";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="p-4 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatsCard
            title="Consolidated Revenue"
            value="€24.5B"
            change="+12.5%"
          />
          <StatsCard title="Net Profit" value="€40.5M" change="+8.3%" />
          <StatsCard
            title="EBITDA Margin"
            value="14.6%"
            change="-3.6%"
            negative
          />
          <StatsCard
            title="Working Capital"
            value="€25.7M"
            change="-3.3%"
            negative
          />
        </div>
        <div className="grid grid-cols-12 gap-4">
          {/* First row */}
          <div className="col-span-12 lg:col-span-8">
            <Chart type="line" title="Revenue & Profit Trend" />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <Chart type="bar" title="Margin Trends (Last 6 Months)" />
          </div>

          {/* Second row */}
          <div className="col-span-12 lg:col-span-8">
            <Table />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <Insights />
          </div>
        </div>
      </div>
    </div>
  );
}
