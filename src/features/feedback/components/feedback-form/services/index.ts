import { useNavigate } from "react-router-dom";
import { updateProject as updateUserProject } from "../../../../../Services/createUser";
import useCollection from "../../../../../hooks/useCollection";
import useAuth from "../../../../../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

// interface feedbacks {
//   feedback_title: string;
//   feedback_description: string;
//   feedback_questions: [];
// }

function useUploadform() {
  const navigate = useNavigate();
  const { project } = useCollection();
  const { auth } = useAuth();
  const upload = async (feedbacks: any) => {
    const post: any = await project(
      {
        feedback_description: feedbacks.feedback_description,
        feedback_title: feedbacks.feedback_title,
      },
      "project"
    );

    if (post) {
      await updateUserProject(
        {
          ...feedbacks,
          projectId: post?.projectId,
          offer: {},
        },
        { profile: auth.name }
      );
    }
  };
  return useMutation({
    mutationFn: (feedbacks: any) => {
      return upload(feedbacks);
    },
    onSuccess: () => {
      toast.success("Feedback created successfully");
      navigate("/app/all-feedbacks");
    },
    onError: (error: AxiosError) => {
      if (!error?.response) {
        toast.error("Kindly connect to the internet");
      }
      toast.error("Something went wrong");
    },
  });
}

export default useUploadform;
