import InfoCardsGrid from "../../components/info-cards grid/Index";
import Card from "../../components/card/Index";
import JobTable from "../../components/jobTable/Index";

const Overview = () => {
  return (
    <>
      <div className="flex gap-6 flex-col lg:flex-row">
        <div className="lg:w-[70%] w-full">
          <InfoCardsGrid />
        </div>
        <Card />
      </div>
      <div className="mt-2 md:mt-4 w-full">
        <JobTable />
      </div>
    </>
  );
};

export default Overview;
