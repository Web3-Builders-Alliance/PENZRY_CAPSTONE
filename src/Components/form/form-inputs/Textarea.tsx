interface TextareaProps {
  label: string;
  name: string;
  register: any;
  errors: any;
}

const base =
  "py-3 px-4 border-[1.5px] w-full text-body-sm text-grey-90 placeholder:text-grey-30 focus:ring-1 focus:ring-grey-20 rounded focus:outline-none hover:border-[#0057FF1A] transition-all duration-700";

// INPUT STYLE VARIANT BASE ON THE STATE
const TEXTAREA_STATES = {
  normal: base + " border-grey-20 focus:border-primary",
  error: base + " border-error focus:border-error",
};

function Textarea({ label, name, register, errors, ...props }: TextareaProps) {
  //Textarea STYLE STATE CONDITIONAL
  const styles = errors[name]
    ? TEXTAREA_STATES["error"]
    : TEXTAREA_STATES["normal"];

  return (
    <div className="w-full mb-4">
      <label
        htmlFor={name}
        className="text-grey-90 text-body-sm text-[14px] mb-2 block"
      >
        {label}
      </label>
      <textarea
        className={styles}
        rows={4}
        id={name}
        {...register(name)}
        {...props}
      />

      {errors[name] && (
        <div className="text-body-sm text-error">{errors[name]?.message}</div>
      )}
    </div>
  );
}

export default Textarea;
