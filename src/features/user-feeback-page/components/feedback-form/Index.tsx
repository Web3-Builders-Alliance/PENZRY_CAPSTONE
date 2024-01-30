import { useForm } from "react-hook-form";
import FormControl from "../../../../Components/form/FormControl";
import Button from "../../../../Components/ui/Button";
// import { AudioRecorder } from "react-audio-voice-recorder";
// import useMintFeedback from "../../../../views/user-feedback-form/services";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { getUserandQuestions } from "../../../../Services/createUser";
import useMint, { filterObject2, filterUniqueKeyValues } from "./services";
import toast from "react-hot-toast";
import { RecruiterSignUpSchema } from "../../../../libs/validation-schema/Schema";
// import { filter } from "@chakra-ui/react";
interface formProps {
  email: string;
}

const initialValues = {
  email: "",
};

function FeedbackForm() {
  // const { mintFeedback } = useMintFeedback();
  const [, setAudioBlob] = useState<Blob | null>(null);
  const [values, setValues] = useState<any>([]);
  const { project } = useMint();
  const params = useParams();
  const { company, id } = params;
  const [datainfo, setData] = useState<any>();
  const [loading, setIsloading] = useState(false);
  const sendValues = (data: any) => {
    setValues((prev: any) => {
      const updatedValues = [{ ...data }, ...prev];
      return updatedValues;
    });
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formProps>({
    defaultValues: initialValues,
    resolver: yupResolver(RecruiterSignUpSchema),
    mode: "onTouched",
  });

  useEffect(() => {
    setIsloading(false);

    const projectId = Number(id);
    async function Questions() {
      const info = await getUserandQuestions({ profile: company }, projectId);
      setData(info[0]?.feedback_questions);
      setIsloading(true);
    }
    Questions();
  }, [company, id, params]);
  // const addAudioElement = (blob: Blob) => {
  //   const audioContainer = document.getElementById("audio");
  //   if (audioContainer) {
  //     const url = URL.createObjectURL(blob);
  //     const audio = document.createElement("audio");
  //     setAudioBlob(blob);
  //     audio.src = url;
  //     audio.controls = true;
  //     audioContainer.appendChild(audio);
  //   }
  // };

  const onSubmit = handleSubmit(async (data) => {
    const filteredObject1 = filterUniqueKeyValues(values);
    const filteredObject3 = filterObject2(filteredObject1, datainfo);
    await project(id, filteredObject3);
    toast.success("Form submitted successfully check your mail");
    reset();
  });

  return (
    <form onSubmit={onSubmit}>
      <FormControl
        formType="email"
        type="email"
        label="E-mail"
        name="email"
        register={register}
        errors={errors}
        placeholder="example@domain.com"
      />

      {loading &&
        datainfo &&
        datainfo.map((item: any) => {
          return (
            <FormControl
              formType={item.question_type}
              label={item.label}
              name={item.name}
              register={register}
              errors={errors}
              placeholder="Enter your answer"
              key={item.id}
              sendValue={(data: any) => sendValues({ [item.name]: data })}
            />
          );
        })}
      <div
        id="audio"
        className="bg-white py-6 px-5 w-full flex flex-col items-center justify-center"
      >
        <p className="text-body-md text-primary my-4">
          The audio feedback is required
        </p>
        {/* <AudioRecorder
          onRecordingComplete={addAudioElement}
          audioTrackConstraints={{
            noiseSuppression: true,
            echoCancellation: true,
            // autoGainControl,
            // channelCount,
            // deviceId,
            // groupId,
            // sampleRate,
            // sampleSize,
          }}
          onNotAllowedOrFound={(err) => console.table(err)}
          downloadOnSavePress={false}
          downloadFileExtension="webm"
          mediaRecorderOptions={{
            audioBitsPerSecond: 128000,
          }}
          // showVisualizer={true}
        /> */}
        <br />
      </div>

      <Button type="primary" className="w-full mt-4 md:mt-5">
        Submit Feedback
      </Button>
    </form>
  );
}

export default FeedbackForm;
