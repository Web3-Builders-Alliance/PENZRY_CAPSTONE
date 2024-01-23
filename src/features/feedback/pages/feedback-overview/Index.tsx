import FeedbackTable from "../../components/feedback-table/Index";
import Button from "../../../../Components/ui/Button";

const FeedbackOverview = () => {
  return (
    <div className="md:px-5 px-2.5 py-4">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-primary text-headline-sm ">All Feedbacks</h3>
        <Button type="primary" to="/create-feedback">
          New Feedback
        </Button>
      </div>
      <FeedbackTable />
    </div>
  );
};

export default FeedbackOverview;
