import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserandQuestions } from "../../../../Services/createUser";

const FeedbackContent = () => {
  const params = useParams();
  const [data, setData] = useState<any>();
  const [loading, setIsloading] = useState(false);
  useEffect(() => {
    setIsloading(false);
    const { company, id } = params;
    const projectId = Number(id);
    async function Questions() {
      const data = await getUserandQuestions({ profile: company }, projectId);
      setData(data);
      setIsloading(true);
    }
    Questions();
  }, [params]);

  return (
    <>
      <h1 className="text-grey-90 text-body-xxl capitalize font-semibold">
        {loading && data && data[0]?.feedback_title}
      </h1>
      <p className="text-grey-40 text-body-md mb-8 mt-2">
        {loading && data && data[0]?.feedback_description}
      </p>
      <div className="bg-white md:px-10 px-7 py-6 shadow-sm rounded-md">
        <h3 className="text-body-xl text-primary font-semibold">
          Feedback Offer
        </h3>
        <p className="text-grey-30 text-body-md my-1">
          Fill the form complete and get the total points awarded for this form
        </p>
      </div>
    </>
  );
};

export default FeedbackContent;
