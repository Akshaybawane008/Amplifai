import CompanyTable from "../components/listcomponent/CompanyTable";
import companyData from "../components/listcomponent/companyData";
import CompanyHeader from "../components/listcomponent/CompanyHeader";
import CompanyPagination from "../components/listcomponent/CompanyPagination";

const ListPage = () => {
  return (
    <>
      <div className="m-0 py-5 px-4">
        <CompanyHeader />
      </div>
      <div className="m-0 py-4 px-4 bg-gray-100  w-full">
        <div >
          <CompanyPagination />
        </div>
        <div>
          <CompanyTable companies={companyData} />
        </div>
      </div>
    </>
  );
};

export default ListPage;
