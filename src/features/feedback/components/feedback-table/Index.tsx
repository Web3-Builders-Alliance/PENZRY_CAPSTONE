import TableCard from "../../../dashboard/components/table-card/Index";
import { Fragment } from "react";
import filterfeedbacks from "../../../../Services/publishfeedback";
import ButtonSpinner from "../../../../Components/ui/ButtonSpinner";
import useAuth from "../../../../hooks/useAuth";
import { CiShare1 } from "react-icons/ci";
import { useQuery } from "@tanstack/react-query";
const FeedbackTable = () => {
  const { auth } = useAuth();
  const { isLoading, data } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: () => filterfeedbacks({ profile: auth.name }),
  });
  return (
    <div>
      {isLoading && <ButtonSpinner />}
      {!data || data.length === 0 ? (
        <>
          <CiShare1></CiShare1>
        </>
      ) : (
        data.map((cur, Index) => {
          return (
            <Fragment key={Index}>
              <TableCard
                feedback={cur.feedback}
                userNumber={cur.projectId}
                userName={auth.name}
                numberReponses={cur.numberResponses}
              />
            </Fragment>
          );
        })
      )}
    </div>
  );
};

export default FeedbackTable;
