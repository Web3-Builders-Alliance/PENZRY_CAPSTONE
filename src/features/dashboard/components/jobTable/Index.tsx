import TableCard from "../table-card/Index";
import { Fragment } from "react";

const content = [
  {
    feedback: "Mr Biggs Food Review",
    userEmail: "favouralex084@gmail.com",
    numberResponses: "0",
  },
];

const JobTable = () => {
  return (
    <div>
      {content.map((cur, Index) => {
        return (
          <Fragment key={Index}>
            <TableCard
              feedback={cur.feedback}
              userEmail={cur.userEmail}
              numberReponses={cur.numberResponses}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

export default JobTable;
