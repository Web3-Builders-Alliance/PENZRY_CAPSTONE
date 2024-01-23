import supabase from "./supabase";
interface User {
  profile?: string;
  feedBacks?: number[];
  email?: string;
}
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
async function createUSer(user: User) {
  const { data, error } = await supabase
    .from("penzryTable")
    .insert([{ profile: user.profile, feedBacks: [], email: user.email }])
    .select();
  if (error) {
    throw new Error(`${error.message}`);
  }
  return data;
}
async function findUser(user: User) {
  const { data, error } = await supabase
    .from("penzryTable")
    .select("*")
    .eq("email", user.email);
  if (error) {
    throw new Error(`${error.message}`);
  }
  return data;
}

const getUserandQuestions = async (user: User, projectId: number) => {
  const { data, error } = await supabase
    .from("penzryTable")
    .select("*")
    .eq("profile", user.profile);
  if (error) {
    throw new Error(`${error.message}`);
  }
  const feedBack = data[0]?.feedBacks;

  const filteredArray = feedBack.filter(
    (item: any) => item.projectId === projectId
  );
  return filteredArray;
};

async function updateProject(feedback: any, user: User) {
  const { data: projectI, error: projectError } = await supabase
    .from("penzryTable")
    .select("*")
    .eq("profile", user.profile);

  if (projectError) {
    throw new Error(`${projectError.message}`);
  }

  if (!projectI || !projectI[0]) {
    throw new Error("Project not found");
  }
  const { error } = await supabase
    .from("penzryTable")
    .update({ feedBacks: [...projectI[0]?.feedBacks, feedback] })
    .eq("profile", user.profile);

  if (error) {
    throw new Error(`${error.message}`);
  }
  return projectI;
}



const filterfeedbacks = async (user: User) => {
  const { data: projectI, error: projectError } = await supabase
    .from("penzryTable")
    .select("*")
    .eq("profile", user.profile);
  if (projectError) {
    throw new Error(`${projectError.message}`);
  }
  const feed = projectI[0].feedBacks.map((feedback: Feedback) => {
    return feedback.projectId;
  });
  return feed;
};
export {
  createUSer,
  updateProject,
  filterfeedbacks,
  getUserandQuestions,
  findUser,
};
