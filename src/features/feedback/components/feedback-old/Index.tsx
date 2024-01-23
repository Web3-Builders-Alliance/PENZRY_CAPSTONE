import React, { useState, ChangeEvent } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Button from "../../../../Components/ui/Button";
import { AudioRecorder } from "react-audio-voice-recorder";

interface FormField {
  id: number;
  name: string;
  label: string;
  required: boolean;
  question_type: "short_answer" | "paragraph" | "multichoice" | "multiCheckbox";
  list: string[];
}

const FeedbackForm: React.FC = () => {
  const [formContent, setFormContent] = useState<FormField[]>([
    {
      id: 0,
      name: "0",
      label: "Untitled Question",
      required: false,
      question_type: "short_answer",
      list: [],
    },
  ]);

  const [formTitle, setFormTitle] = useState({
    title: "",
    description: "",
  });

  const [onEdit, setOnEdit] = useState<boolean>(false);
  const [textField, setTextField] = useState<string>("");
  const [textField2, setTextField2] = useState<string>("");
  const [editedField, setEditedField] = useState<string>("");

  const publishFeedback = () => {
    const feedback = {
      feedback_title: formTitle.title,
      feedback_description: formTitle.description,
      feedback_questions: formContent,
    };
    console.log(feedback);
  };

  const addQuestion = () => {
    const field: FormField = {
      id: formContent.length,
      name: `question_${formContent.length}`,
      label: "Untitled question",
      required: false,
      question_type: "short_answer",
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

  const editFieldType = (fieldName: string, fieldType: string) => {
    const validFieldTypes: (
      | "short_answer"
      | "paragraph"
      | "multichoice"
      | "multiCheckbox"
    )[] = ["short_answer", "paragraph", "multichoice", "multiCheckbox"];

    if (validFieldTypes.includes(fieldType as any)) {
      // Use type assertion as any
      const formFields: FormField[] = [...formContent];
      const fieldIndex = formFields.findIndex((f) => f.name === fieldName);
      if (fieldIndex > -1) {
        formFields[fieldIndex].question_type = fieldType as
          | "short_answer"
          | "paragraph"
          | "multichoice"
          | "multiCheckbox"; // Use type assertion
        setFormContent(formFields);
      }
    }
  };

  const addFieldOption = (fieldName: string, option: string) => {
    const formFields: FormField[] = [...formContent];
    const fieldIndex = formFields.findIndex((f) => f.name === fieldName);
    if (fieldIndex > -1) {
      if (option && option !== "") {
        formFields[fieldIndex].list.push(option);
        setFormContent(formFields);
      }
    }
  };

  const addAudioElement = (blob: Blob) => {
    const audioContainer = document.getElementById("audio");
    if (audioContainer) {
      const url = URL.createObjectURL(blob);
      const audio = document.createElement("audio");
      audio.src = url;
      audio.controls = true;
      audioContainer.appendChild(audio);
    }
  };

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
                    className="block text-sm font-medium text-gray-700 capitalize px-1 md:px-5 mt-3"
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
                  <div className="ml-2.5 md:ml-0">
                    <select
                      className="mr-5 focus:ring-1 focus:ring-grey-20 rounded focus:outline-none hover:border-[#0057FF1A] transition-all duration-700 border-grey-20 focus:border-primary"
                      onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                        editFieldType(field.name, e.target.value)
                      }
                    >
                      <option value="short_answer">Short Answer</option>
                      <option value="paragraph">Paragraph</option>
                      <option value="multichoice">Multichoice</option>
                      <option value="multiCheckbox">MultiCheckbox</option>
                    </select>
                  </div>
                </div>

                <div className="my-4 w-full md:px-5 px-1">
                  {field.question_type === "short_answer" && (
                    <input
                      type="text"
                      className="px-5 pl-1 mx-auto w-[95%] md:ml-2.5 shadow-sm py-2 block md:w-full focus:ring-1 focus:ring-grey-20 rounded focus:outline-none hover:border-[#0057FF1A] transition-all duration-700 border-grey-20 focus:border-primary"
                      placeholder={field.label}
                      readOnly
                    />
                  )}
                  {field.question_type === "paragraph" && (
                    <textarea
                      rows={1}
                      className="px-5 pl-1 mx-auto w-[95%] md:ml-2.5 shadow-sm py-2 block md:w-full focus:ring-1 focus:ring-grey-20 rounded focus:outline-none hover:border-[#0057FF1A] transition-all duration-700 border-grey-20 focus:border-primary"
                      placeholder={field.label}
                      readOnly
                    />
                  )}
                  {field.question_type === "multiCheckbox" && (
                    <div className="flex flex-col space-y-2 -mt-2 md:pl-3.5 px-2">
                      {field.list.map((option) => {
                        return (
                          <div className="mt-2 flex items-center" key={option}>
                            <input
                              type="checkbox"
                              className="peer h-5 w-5 rounded-lg border-[1.5px] border-grey-30 accent-primary transition-all duration-1000 focus:rounded-lg focus:ring-0 focus:ring-primary cursor-pointer"
                            />
                            <label
                              htmlFor={option}
                              className="ml-3 text-grey-100 peer-checked:text-grey-90 text-body-md"
                            >
                              {option}
                            </label>
                          </div>
                        );
                      })}

                      <div className="flex space-between mt-4">
                        <input
                          type="text"
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setTextField2(e.target.value)
                          }
                          value={textField2}
                          placeholder="Add an option"
                          className="flex-1 py-2 px-4 border-[1.5px] w-full text-body-sm text-grey-90 placeholder:text-grey-30 focus:ring-1 focus:ring-grey-20 focus:outline-none hover:border-[#0057FF1A] transition-all duration-700 border-grey-20 focus:border-primary"
                        />
                        <button
                          className="bg-primary block hover:bg-indigo-900 text-white px-4 -ml-1"
                          onClick={() => {
                            addFieldOption(field.name, textField2);
                            setTextField2("");
                          }}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  )}

                  {field.question_type === "multichoice" && (
                    <div className="my-4 flex flex-col space-y-2 md:pl-3.5 px-2">
                      <select className="px-5 pl-2.5 shadow-sm py-2 block w-full border focus:ring-1 focus:ring-grey-20 rounded focus:outline-none hover:border-[#0057FF1A] transition-all duration-700 border-grey-20 focus:border-primary">
                        {field.list.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <div className="flex space-between mt-2">
                        <input
                          type="text"
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setTextField(e.target.value)
                          }
                          value={textField}
                          placeholder="Add an option"
                          className="flex-1 py-2 px-4 border-[1.5px] w-full text-body-sm text-grey-90 placeholder:text-grey-30 focus:ring-1 focus:ring-grey-20 focus:outline-none hover:border-[#0057FF1A] transition-all duration-700 border-grey-20 focus:border-primary"
                        />
                        <button
                          className="bg-primary block hover:bg-indigo-900 text-white px-4 -ml-1"
                          onClick={() => {
                            addFieldOption(field.name, textField);
                            setTextField("");
                          }}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  )}
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
      <div
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
      </div>
      <div className="flex justify-center w-full mt-8">
        <Button
          type="primary"
          className="w-6/12 mt-6"
          onClick={publishFeedback}
        >
          Publish Feedback
        </Button>
      </div>
    </div>
  );
};

export default FeedbackForm;
