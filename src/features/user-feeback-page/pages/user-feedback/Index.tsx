import FeedbackContent from "../../components/feedback-content/Index";
import FeedbackForm from "../../components/feedback-form/Index";

const UserFeedbackPage = () => {
  return (
    <div>
      <FeedbackContent />
      <div className="bg-white px-7 md:px-10 py-7 shadow-sm rounded-md mt-5">
        <h3 className="md:text-body-xl text-body-md text-[19px] text-primary font-semibold mb-5">
          Kindly give us your feedback
        </h3>
        <FeedbackForm />
      </div>
    </div>
  );
};

export default UserFeedbackPage;
