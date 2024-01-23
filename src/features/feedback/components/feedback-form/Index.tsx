import React, { useState, ChangeEvent } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Button from "../../../../Components/ui/Button";
import Marks from "../../../../Components/progress-range/Index";
import ButtonSpinner from "../../../../Components/ui/ButtonSpinner";
import useUploadform from "./services";


interface FormField {
  id: number;
  name: string;
  label: string;
  required: boolean;
  question_type:
    | "short_answer"
    | "paragraph"
    | "multichoice"
    | "multiCheckbox"
    | "progress";
  list: string[];
}

const FeedbackForm: React.FC = () => {
  const { mutateAsync: uploadFunction, isLoading } = useUploadform();
  const [formContent, setFormContent] = useState<FormField[]>([
    {
      id: 0,
      name: "0",
      label: "Untitled Question",
      required: false,
      question_type: "progress",
      list: [],
    },
  ]);

  const [formTitle, setFormTitle] = useState({
    title: "",
    description: "",
  });

  const [onEdit, setOnEdit] = useState<boolean>(false);
  const [editedField, setEditedField] = useState<string>("");

  const publishFeedback = async () => {
    const feedback = {
      feedback_title: formTitle.title,
      feedback_description: formTitle.description,
      feedback_questions: formContent,
    };
    await uploadFunction(feedback);
  };

  const addQuestion = () => {
    const field: FormField = {
      id: formContent.length,
      name: `question_${formContent.length}`,
      label: "Untitled question",
      required: false,
      question_type: "progress",
      list: [],
    };
    setFormContent([...formContent, field]);
  };

  const editField = (fieldName: string, fieldLabel: string) => {
    const formFields: FormField[] = [...formContent];
    const fieldIndex = formFields.findIndex((f) => f.name === fieldName);
    if (fieldIndex > -1) {
      formFields[fieldIndex].label = fieldLabel;
      setFormContent(formFields);
    }
  };

  // const addAudioElement = (blob: Blob) => {
  //   const audioContainer = document.getElementById("audio");
  //   if (audioContainer) {
  //     const url = URL.createObjectURL(blob);
  //     const audio = document.createElement("audio");
  //     audio.src = url;
  //     audio.controls = true;
  //     audioContainer.appendChild(audio);
  //   }
  // };

  return (
    <div className="flex flex-col justify-start items-center min-h-screen md:w-[90%] w-full space-y-4">
      <div className="flex flex-col md:px-10 px-6 py-8 bg-white rounded-md justify-center item-start w-full shadow-sm border-primary border-t-8 space-y-2 min-h-52 ">
        <h1 className="text-headline-sm text-primary">Create Feedback</h1>
        <div className="w-full mb-4">
          <label
            htmlFor="feedback_name"
            className="text-grey-90 text-body-sm text-[14px] mb-2 block"
          >
            Feedback Name
          </label>
          <input
            className={
              "py-2 px-4 border-[1.5px] w-full text-body-sm text-grey-90 placeholder:text-grey-30 focus:ring-1 focus:ring-grey-20 rounded focus:outline-none hover:border-[#0057FF1A] transition-all duration-700 border-grey-20 focus:border-primary"
            }
            type="text"
            id="feedback_name"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setFormTitle((prev) => {
                return {
                  ...prev,
                  title: e.target.value,
                };
              });
            }}
          />
        </div>
        <div className="w-full mb-4">
          <label
            htmlFor="feedback_description"
            className="text-grey-90 text-body-sm text-[14px] mb-2 block"
          >
            Feedback Description
          </label>
          <textarea
            className={
              "py-2 px-4 border-[1.5px] w-full text-body-sm text-grey-90 placeholder:text-grey-30 focus:ring-1 focus:ring-grey-20 rounded focus:outline-none hover:border-[#0057FF1A] transition-all duration-700 border-grey-20 focus:border-primary"
            }
            rows={3}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              setFormTitle((prev) => {
                return {
                  ...prev,
                  description: e.target.value,
                };
              });
            }}
            id="feedback_description"
          />
        </div>
      </div>

      <div className="relative flex flex-col w-full space-y-4">
        {formContent.map((field) => {
          return (
            <div
              key={field.id}
              className="rounded-md bg-white flex w-full shadow-md px-2.5 md:px-4 py-4"
            >
              <div className="flex flex-col w-full">
                <div className="flex justify-between items-start md:items-center flex-col md:flex-row space-y-2">
                  <div
                    key={field.name}
                    className="block text-sm font-medium cursor-pointer text-gray-700 capitalize px-1 md:px-5 mt-3"
                  >
                    {onEdit && editedField === field.name ? (
                      <input
                        className="py-1 px-5 pl-2.5  focus:ring-1 focus:ring-grey-20 rounded focus:outline-none hover:border-[#0057FF1A] transition-all duration-700 border-grey-20 focus:border-primary "
                        type="text"
                        value={field.label}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          editField(field.name, e.target.value)
                        }
                        onBlur={() => {
                          setOnEdit(false);
                          setEditedField("");
                        }}
                      />
                    ) : (
                      <label
                        className="py-1 px-5 pl-2.5"
                        onClick={() => {
                          setOnEdit(true);
                          setEditedField(field.name);
                        }}
                      >
                        {field.label}
                        <span className="text-error text-body-xs block px-3">
                          Kindly click on the title to edit
                        </span>
                      </label>
                    )}
                  </div>
                </div>

                <div className="my-4 w-full md:px-5 px-1">
                  {field.question_type === "progress" && (
                    <label className="block pl-1 px-5 mx-auto w-[95%] md:ml-2 py-2 md:w-full">
                      {field.label}
                    </label>
                  )}

                  <div className="px-5 pl-1 mx-auto w-[95%] md:ml-2 py-2 md:w-full">
                    <Marks
                      rtl={false}
                      sendValue={(value: any) => {
                        console.log(value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="fixed md:absolute top-[10vh] right-5 md:-right-16 flex flex-col items-center bg-white p-2 rounded-md shadow-md">
          <button onClick={() => addQuestion()}>
            <AiOutlinePlusCircle className="w-8 h-8 text-gray-400 hover:text-indigo-500" />
          </button>
        </div>
      </div>
      {/* <div
        id="audio"
        className="bg-white py-6 px-5 w-full flex flex-col items-center justify-center"
      >
        <p className="text-body-md text-primary my-4">
          The audio feedback is by default available to users giving feedback
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
      </div> */}
      <div className="flex justify-center w-full mt-8">
        <Button
          type="primary"
          className="w-6/12 mt-6"
          onClick={publishFeedback}
        >
          {isLoading ? <ButtonSpinner /> : "Publish Feedback"}
        </Button>
      </div>
    </div>
  );
};

export default FeedbackForm;
