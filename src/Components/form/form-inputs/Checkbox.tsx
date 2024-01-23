import { FieldValues, UseFormRegister, FieldError } from "react-hook-form";
interface CheckboxProps {
  label: string;
  name: string;
  options: { key: string; value: string }[];
  errors: Record<string, FieldError>;
  register: UseFormRegister<FieldValues>;
}

function Checkbox({
  label,
  name,
  options,
  errors,
  register,
  ...props
}: CheckboxProps) {
  return (
    <div className="w-full mb-4">
      {/* CheckBox Group Label */}
      <label
        htmlFor={name}
        className="text-grey-90 text-body-sm text-[14px] mb-2 block"
      >
        {label}
      </label>

      {/* CheckBox Options Array & Looping */}
      <ul className="mx-4 px-6 pt-1">
        {options.map((option) => {
          return (
            <li className="mt-3 flex items-center" key={option.key}>
              <input
                type="checkbox"
                className="peer h-5 w-5 rounded-lg border-[1.5px] border-grey-30 accent-primary transition-all duration-1000 focus:rounded-lg focus:ring-0 focus:ring-primary cursor-pointer"
                id={option.value}
                value={option.value}
                {...register(name)}
                {...props}
              />
              <label
                htmlFor={option.value}
                className="ml-3 text-grey-100 peer-checked:text-grey-90 text-body-md"
              >
                {option.key}
              </label>
            </li>
          );
        })}
      </ul>

      {/* Error State */}

      {errors[name] && (
        <div className="text-body-sm text-error">{errors[name]?.message}</div>
      )}
    </div>
  );
}

export default Checkbox;
