import { useState } from "react";
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";

interface InputProps {
  label: string;
  name: string;
  register: any;
  errors: any;
}

const base =
  "py-3 px-4 border-[1.5px] w-full text-body-sm text-grey-90 placeholder:text-grey-30 focus:ring-1 focus:ring-grey-20 rounded focus:outline-none hover:border-[#0057FF1A] transition-all duration-700";

// INPUT STYLE VARIANT BASE ON THE STATE
const INPUT_STATES = {
  normal: base + " border-grey-20 focus:border-primary",
  error: base + " border-error focus:border-error",
};

function PasswordInput({
  label,
  name,
  register,
  errors,
  ...props
}: InputProps) {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  //ERROR STYLE STATE CONDITIONAL
  const styles = errors[name] ? INPUT_STATES["error"] : INPUT_STATES["normal"];

  return (
    <div className="w-full mb-4 ">
      <label
        htmlFor={name}
        className="text-grey-90 text-body-sm text-[14px] mb-2 block"
      >
        {label}
      </label>

      <div className="relative">
        <input
          className={styles}
          type={show ? "text" : "password"}
          id={name}
          {...register(name)}
          {...props}
        />

        <div className="absolute right-4 top-4 cursor-pointer">
          {show ? (
            <BsEye className="text-grey-30" onClick={handleToggle} />
          ) : (
            <BsEyeSlash className="text-grey-30" onClick={handleToggle} />
          )}
        </div>
      </div>
      {errors[name] && (
        <div className="text-body-sm text-error">{errors[name]?.message}</div>
      )}
    </div>
  );
}

export default PasswordInput;
