import {
  LineChart,
  Line,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", revenue: 90, profit: 40, expense: 70, cogs: 78 },
  { name: "Feb", revenue: 85, profit: 42, expense: 71, cogs: 76 },
  { name: "Mar", revenue: 88, profit: 41, expense: 69, cogs: 75 },
  { name: "Apr", revenue: 95, profit: 44, expense: 73, cogs: 77 },
  { name: "May", revenue: 98, profit: 45, expense: 74, cogs: 79 },
  { name: "Jun", revenue: 100, profit: 46, expense: 72, cogs: 78 },
];

export default function Chart({ type, title }) {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h4 className="text-sm font-medium mb-2">{title}</h4>
      <ResponsiveContainer width="100%" height={250}>
        {type === "line" ? (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#2563eb" />
            <Line type="monotone" dataKey="profit" stroke="#ef4444" />
          </LineChart>
        ) : (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#2563eb" />
            <Bar dataKey="expense" fill="#facc15" />
            <Bar dataKey="cogs" fill="#f97316" />
          </BarChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
