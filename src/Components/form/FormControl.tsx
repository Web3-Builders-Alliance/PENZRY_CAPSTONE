import Input from "./form-inputs/Input";
import SelectInput from "./form-inputs/SelectInput";
import PasswordInput from "./form-inputs/PasswordInput";
import Checkbox from "./form-inputs/Checkbox";
import { ReactNode } from "react";
import Textarea from "./form-inputs/Textarea";
import Marks from "../progress-range/Index";


interface formControlProps {
  formType?: string;
  placeholder?: string;
  label: string;
  name: string;
  type?: any;
  register?: any;
  errors?: any;
  control?: any;
  options?: any;
  otp?: any;
  setOtp?: any;
  min?: any;
  sendValue?: (data: any) => void;
  rtl?: boolean;
  children?: ReactNode;
}

function FormControl({
  formType,
  label,
  name,
  type,
  register,
  errors,
  options,
  control,
  rtl,
  sendValue,
  otp,
  setOtp,
  children,
  ...props
}: formControlProps) {
  //INPUT SELECT
  if (formType === "select") {
    return (
      <SelectInput
        label={label}
        name={name}
        errors={errors}
        control={control}
        options={options}
        {...props}
      />
    );
  }

  //INPUT CHECKBOX
  if (formType === "checkbox") {
    return (
      <Checkbox
        label={label}
        options={options}
        name={name}
        register={register}
        errors={errors}
        {...props}
      />
    );
  }

  //INPUT PASSWORD
  if (formType === "password") {
    return (
      <PasswordInput
        label={label}
        name={name}
        register={register}
        errors={errors}
        {...props}
      />
    );
  }
  if (formType === "progress") {
    return (
      <div className="my-3 w-full md:px-5 px-1">
        <label className="block pl-1 px-5 mx-auto w-[95%] md:ml-2 py-2 md:w-full">
          {label}
        </label>
        <div className="px-5 pl-1 mx-auto w-[95%] md:ml-2 py-2 md:w-full">
          <Marks rtl={false} sendValue={sendValue} />
        </div>
      </div>
    );
  }
  //INPUT PASSWORD
  if (formType === "textarea") {
    return (
      <Textarea
        label={label}
        name={name}
        register={register}
        errors={errors}
        {...props}
      />
    );
  }
  return (
    <Input
      label={label}
      name={name}
      type={type}
      register={register}
      errors={errors}
      {...props}
    />
  );
}

export default FormControl;
