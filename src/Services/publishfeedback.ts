import supabase from "./supabase";
interface Feedback {
  feedback_title: string;
  feedback_description: string;
  feedback_questions: {
    id: number;
    name: string;
    label: string;
    required: boolean;
    question_type: string;
    list: any[];
  }[];
  projectId: number;
  offer: any;
}
interface User {
  profile?: string;
  feedBacks?: number[];
  email?: string;
}
interface Data {
  profile: string;
  email: string;
  feedBacks: Feedback[];
  id: string;
}
function extractFeedback(data: Data[]): Array<{
  feedback: string;
  userEmail: string;
  numberResponses: number;
  projectId: number;
}> {
  const result: Array<{
    feedback: string;
    userEmail: string;
    numberResponses: number;
    projectId: number;
  }> = [];

  data.forEach((item: Data) => {
    item.feedBacks.forEach((feedback: Feedback) => {
      result.push({
        feedback: feedback.feedback_title,
        userEmail: item.email,
        numberResponses: 0,
        projectId: feedback.projectId,
      });
    });
  });

  return result;
}

const filterfeedbacks = async (user: User) => {
  const { data: projectI, error: projectError } = await supabase
    .from("penzryTable")
    .select("*")
    .eq("profile", user.profile);
  if (projectError) {
    throw new Error(`${projectError.message}`);
  }
  const feedBack = extractFeedback(projectI);
  return feedBack;
};

export default filterfeedbacks;
