import Button from "../../../../Components/ui/Button";
import { FiArrowUpRight } from "react-icons/fi";
import CopyLinkButton from "../../../../Components/ui/CopyText";

interface TableCardProps {
  feedback: string;
  userEmail: string;
  numberReponses: string;
}

const TableCard = ({ feedback, userEmail, numberReponses }: TableCardProps) => {
  return (
    <div className="bg-white w-full rounded-lg px-4 md:px-6 lg:px-10 py-4 lg:py-5 flex items-center justify-between mb-3">
      <div className="flex items-end lg:gap-2 gap-0">
        <div>
          <p className="text-grey-90 text-body-sm md:text-body-md">
            {feedback}
          </p>

          <CopyLinkButton linkToCopy={userEmail} linkText={userEmail} />
        </div>
        <Button
          type="small"
          className="text-primary bg-variant-40 hidden lg:block"
        >
          {numberReponses} &nbsp; Responses
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <Button
          type="secondary"
          className="flex gap-0 lg:gap-1 items-center justify-center border !text-grey-90 
            border-grey-20 !bg-variant-20 py-1.5 md:py-1 px-2 md:px-4 md:pr-1.5"
        >
          <span className="text-body-xs md:text-body-sm font-medium">
            View Details
          </span>
          <FiArrowUpRight className="text-grey-90 text-[24px] p-1 hidden md:block" />
        </Button>
      </div>
    </div>
  );
};

export default TableCard;
