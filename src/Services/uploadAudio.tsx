import supabase from "./supabase";

const uploadAudio = async (file: Blob) => {
   const fileName = "audio.webm"; // Provide a default file name
   const files = new File([file], fileName, {
     type: "audio/ogg; codecs=opus",
   });
   const { data, error } = await supabase.storage.from("audioBucket").upload(`audio/${fileName}`, files);
   if (error) {
     throw new Error(`${error.message}`);
   }
   return data;
};

export default uploadAudio;
