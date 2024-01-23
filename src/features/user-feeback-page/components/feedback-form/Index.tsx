import { set, useForm } from "react-hook-form";
import FormControl from "../../../../Components/form/FormControl";
import Button from "../../../../Components/ui/Button";
import { AudioRecorder } from "react-audio-voice-recorder";
import useMintFeedback from "../../../../views/user-feedback-form/services";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserandQuestions } from "../../../../Services/createUser";
import useMint from "./services";
import toast from "react-hot-toast";
interface formProps {
  firstname: string;
  lastname: string;
  email: string;
}

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
};

function FeedbackForm() {
  const { mintFeedback } = useMintFeedback();
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [values, setValues] = useState<any>([]);
  const { project } = useMint();
  const params = useParams();
  const { company, id } = params;
  const [data, setData] = useState<any>();
  const [loading, setIsloading] = useState(false);
  const sendValues = (data: any) => {
    let [info] = data;
    const infos = {
      value: info,
    };
    setValues((prev: any) => [infos, ...prev]);
    console.log(values);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formProps>({
    defaultValues: initialValues,
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
  const addAudioElement = (blob: Blob) => {
    const audioContainer = document.getElementById("audio");
    if (audioContainer) {
      const url = URL.createObjectURL(blob);
      const audio = document.createElement("audio");
      setAudioBlob(blob);
      audio.src = url;
      audio.controls = true;
      audioContainer.appendChild(audio);
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    const nft = await project(id);
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
        data &&
        data.map((item: any, index: number) => {
          return (
            <FormControl
              formType={item.question_type}
              label={item.label}
              name={item.name}
              register={register}
              errors={errors}
              placeholder="Enter your answer"
              key={item.id}
              sendValue={sendValues}
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
        <AudioRecorder
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
        />
        <br />
      </div>

      <Button
        type="primary"
        className="w-full mt-4 md:mt-5"
        onClick={handleSubmit}
      >
        Submit Feedback
      </Button>
    </form>
  );
}

export default FeedbackForm;
