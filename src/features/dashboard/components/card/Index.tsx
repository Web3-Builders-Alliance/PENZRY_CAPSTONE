import Button from "../../../../Components/ui/Button";
import { AiOutlineArrowRight } from "react-icons/ai";

const Card = () => {
  return (
    <div className="bg-primary py-5 px-6 md:py-6 md:px-7 rounded-lg relative h-max lg:w-[30%] w-full overflow-hidden flex items-end gap-3 md:gap-[21px] lg:flex-col lg:items-start -mt-[108px] md:mt-0">
      <div className="z-10 relative w-7/12 md:w-9/12 lg:w-full">
        <p className="text-white text-body-lg font-medium ">Get Feedbacks</p>
        <p className="text-grey-20 text-body-sm md:text-[15px] mt-1 ">
          Create offers for individuals who provide feedbacks
        </p>
      </div>
      <Button
        type="secondary"
        className="w-6/12 md:w-3/12 lg:w-[70%] flex justify-center items-center gap-2 py-1.5 
        md:py-[9px] relative z-10"
      >
        <span className="text-grey-90 font-medium text-body-sm md:text-body-md">
          Create Offer
        </span>
        <AiOutlineArrowRight className="text-grey-90 text-[14px] md:text-[17px]" />
      </Button>
    </div>
  );
};

export default Card;
