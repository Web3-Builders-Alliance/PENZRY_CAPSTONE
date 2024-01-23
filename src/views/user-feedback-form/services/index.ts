import useCollection from "../../../hooks/useCollection";

const useMintFeedback = () => {
  const { project } = useCollection();
  
  const mintFeedback = async (feedbacks: any, projectID: number) => {
    const post: any = await project(
      {
        feedback_description: feedbacks.feedback_description,
        feedback_title: feedbacks.feedback_title,
      },
      "nft",
      {
        name: "PENZRY",
        attributes: {
          audio: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
          email: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
          points:
            "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
        },
      },
      projectID
    );
    return post;
  };
  return { mintFeedback };
};

export default useMintFeedback;
