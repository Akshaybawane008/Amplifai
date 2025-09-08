
export default function CompanyRow({ company }) {
  return (
    <tr className="border">
      <td className="px-4 py-4 font-medium">{company.name}</td>
      <td className="px-4 py-4 text-gray-900">{company.ceo}</td>
      <td className="px-4 py-4">{company.revenue}</td>
      <td
        className={`px-4 py-4 ${
          company.profit.startsWith("+") ? "text-green-600" : "text-red-500"
        }`}
      >
        {company.profit}
      </td>
      <td className="px-4 py-4">{company.ebitda}</td>
      <td
        className={`px-4 py-4 flex items-center ${
          company.marginPositive ? "text-green-600" : "text-red-500"
        }`}
      >
        {company.marginPositive ? "📈" : "📉"} {company.margin}
      </td>
      <td className="px-4 py-4 space-x-2">
        {company.insights.map((tag, idx) => (
          <span
            key={idx}
            className="px-2 py-1 border rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </td>
    </tr>
  );
}
