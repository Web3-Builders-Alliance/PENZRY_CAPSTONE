import { Controller } from "react-hook-form";
import Select, { components, DropdownIndicatorProps } from "react-select";
import { BiSolidDownArrow } from "react-icons/bi";
import clsx from "clsx";

interface SelectProps {
  label: string;
  name: string;
  errors: any;
  control: any;
  options: any;
}

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <BiSolidDownArrow className="text-grey-100 p-[1px] hover:text-grey-50 text-body-xs" />
    </components.DropdownIndicator>
  );
};

const SelectInput = ({
  label,
  name,
  errors,
  control,
  options,
  ...props
}: SelectProps) => {
  const controlStyles = {
    base: "transition-all boc py-[6px] px-2 duration-[800ms] rounded border-[1.5px] placeholder:text-grey-20",
    focus: "outline-none ring-1 ring-grey-20 border-primary",
    nonFocus: "border-grey-20",
  };

  const placeholderStyles = "text-grey-90 text-body-sm";
  const selectInputStyles = "text-body-sm";
  const optionStyles = "text-body-sm p-2 text-grey-100";

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={null}
      render={({ field: { onChange, onBlur, value, name, ref } }) => (
        <div className="w-full mb-4">
          <label
            htmlFor={name}
            className="text-grey-90 text-body-sm text-[14px] mb-2 block"
          >
            {label}
          </label>
          <Select
            components={{ DropdownIndicator }}
            styles={{
              input: (base) => ({
                ...base,
                "input:focus": {
                  boxShadow: "none",
                },
              }),
              control: (base) => ({
                ...base,
                transition: "none",
                borderColor: `${errors[name] ? "#FC6161" : "#DCDCDC"}`,
                borderRadius: "4px",
                borderWidth: "1.5px",
                cursor: "pointer",
                outline: "none",

                ".boc:hover": {
                  borderColor: "#0057FF1A",
                },
              }),
            }}
            classNames={{
              control: ({ isFocused }) =>
                clsx(
                  isFocused ? controlStyles.focus : controlStyles.nonFocus,
                  controlStyles.base
                ),
              placeholder: () => placeholderStyles,
              input: () => selectInputStyles,
              option: () => optionStyles,
            }}
            name={name}
            ref={ref}
            options={options}
            defaultValue=""
            onBlur={onBlur}
            value={options.find((c: any) => c.value === value)}
            onChange={(e) => {
              onChange(e.value);
            }}
            {...props}
          />
          {errors[name] && (
            <div className="text-body-sm text-error">
              {errors[name]?.message}
            </div>
          )}
        </div>
      )}
    />
  );
};

export default SelectInput;
