import CompanyRow from "./CompanyRow";

export default function CompanyTable({ companies }) {
  return (
   
    <table className="w-full text-sm text-left font-semibold border border-collapse">
      <thead>
        <tr className="text-gray-500 bg-white-100 border ">
          <th className="px-4 py-3 ">Company Name</th>
          <th className="px-4 py-3 ">CEO/Key Person</th>
          <th className="px-4 py-3 ">Revenue</th>
          <th className="px-4 py-3 ">Profit</th>
          <th className="px-4 py-3 ">EBITDA</th>
          <th className="px-4 py-3 ">Gross Margin</th>
          <th className="px-4 py-3 ">Key Insights</th>
        </tr>
      </thead>
      <tbody>
        {companies.map((c, i) => (
          <CompanyRow key={i} company={c} className="bg-white" />
        ))}
      </tbody>
    </table>
  );
}
