import TableCard from "../../../dashboard/components/table-card/Index";
import { Fragment } from "react";

const content = [
  {
    feedback: "Food Meal Tuesday",
    userEmail: "alexspoof@gmail.com",
    numberResponses: "11",
  },
  {
    feedback: "Event Lawyers Meetup",
    userEmail: "jerryade@gmail.com",
    numberResponses: "139",
  },
  {
    feedback: "Techcabal Moonshot",
    userEmail: "alexspoof@gmail.com",
    numberResponses: "08",
  },
  {
    feedback: "Event Lawyers Meetup",
    userEmail: "jerryade@gmail.com",
    numberResponses: "139",
  },
  {
    feedback: "Techcabal Moonshot",
    userEmail: "alexspoof@gmail.com",
    numberResponses: "08",
  },
];

const AllOffers = () => {
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

export default AllOffers;
