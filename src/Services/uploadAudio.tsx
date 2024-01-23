import supabase from "./supabase";

const uploadAudio = async (file: Blob) => {
   const files = new File([file], "audio.webm", {
     type: "audio/ogg; codecs=opus",
   });
   const { data, error } = await supabase.storage
     .from("audioBucket")
     .upload(`audio/${file.name}`, files);
   if (error) {
     throw new Error(`${error.message}`);
   }
   return data;
};

export default uploadAudio;
