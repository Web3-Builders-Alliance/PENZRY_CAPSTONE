import InfoCards from "../info-cards/Index";
import Button from "../../../../Components/ui/Button";
import useAuth from "../../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { filterfeedbacks } from "../../../../Services/createUser";

const InfoCardsGrid = () => {
  const { auth } = useAuth();
  const { isLoading, data, isError } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: () => filterfeedbacks({ profile: auth.name }),
  });

  return (
    <div className="flex gap-2 lg:gap-3 card-carousel w-full h-[280px] md:h-full overflow-x-auto md:overflow-x-visible relative">
      <InfoCards
        title="Feedbacks"
        stats={data?.length || 0}
        percent={`+${0}%`}
        button={
          <Button type="small" className="text-primary my-1.5 lg:my-0">
            Create Feedback
          </Button>
        }
      />
      <InfoCards
        title="Responses"
        stats="0"
        percent={`+${0}%`}
        button={
          <Button type="small" className="text-primary my-1.5 lg:my-0">
            View Responses
          </Button>
        }
      />
      <InfoCards
        title="Offers"
        stats="00"
        percent={`+${0}%`}
        button={
          <Button type="small" className="text-primary my-1.5 lg:my-0">
            View Offers
          </Button>
        }
      />
    </div>
  );
};

export default InfoCardsGrid;
