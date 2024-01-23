import axios from "../../../../../Services/axios";

function useMint() {
  const project = async (projectID: any) => {
    // const info = await uploadAudio(file);
    // if (info === null) {
    //   return null;
    // }
    const number = Number(projectID)
    const { data } = await axios.post(`/projects/${number}/nfts`, {
      attributes: {
        audio:
          "",
        email: "",
        points: "",
        taste: "",
        customerService: "",
      },
      name: "Mr Biggs Feedback",
      image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
    });
    return data;
  };

  return { project };
}

export default useMint;
