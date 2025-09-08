export default function StatsCard({ title, value, change, negative }) {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h4 className="text-sm text-gray-500">{title}</h4>
      <p className="text-xl font-semibold">{value}</p>
      <p className={`text-sm ${negative ? "text-red-500" : "text-green-600"}`}>
        {change}
      </p>
    </div>
  );
}
