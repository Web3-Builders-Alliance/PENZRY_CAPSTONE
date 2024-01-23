import { ReactNode } from "react";

interface CheckBoxProps {
  name: string;
  register: any;
  errors: any;
  children: ReactNode;
}

const Check = ({
  name,
  register,
  errors,
  children,
  ...props
}: CheckBoxProps) => {
  return (
    <div className="mb-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="peer h-5 w-5 rounded-lg border-[1.5px] border-grey-30 accent-primary transition-all duration-1000 focus:rounded-lg focus:ring-0 focus:ring-primary cursor-pointer"
          id={name}
          {...register(name)}
          {...props}
        />
        <label
          htmlFor={name}
          className="ml-3 text-grey-100 peer-checked:text-grey-90 text-body-md"
        >
          {children}
        </label>
      </div>
      {errors[name] && (
        <div className="text-body-sm text-error">{errors[name]?.message}</div>
      )}
    </div>
  );
};

export default Check;
