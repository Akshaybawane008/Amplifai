

export default function Insights() {
  const insights = [
    {
      title: "Monthly Variance Summaries",
      text: "Infinix Digital Innovations reported an 8% decline in profit this month, primarily driven by increased logistics expenses.",
    },
    {
      title: "Recommended Actions",
      text: "Refocus project costs in Creative Technologies by 12% to improve efficiency.",
    },
    {
      title: "Market Trends",
      text: "Quantum Trends LLC has seen a 15% increase in customer demand, attributed to the launch of their new product line.",
    },
    {
      title: "Future Projections",
      text: "Analysts predict a 10% growth in revenue for Helix Digital Innovations next quarter, as new partnerships are expected to enhance market reach.",
    },
  ];

  return (
    <div className="bg-orange-100 shadow rounded-lg p-4">
      <h4 className="text-sm font-medium mb-3 text-orange-900">Insights</h4>
      <ul className="space-y-4">
        {insights.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
        
            <span className="text-orange-500 mt-1">◆</span>
            <div>
              <p className="font-semibold text-sm text-gray-800">
                {item.title}
              </p>
              <p className="text-xs text-gray-600">{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
