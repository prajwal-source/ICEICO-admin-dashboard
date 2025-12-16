const CheckBox = ({
  label,
  name,
  checked,
  onChange,
  className = "",
}) => {
  return (
    <label
      className={`flex items-center cursor-pointer
                  lg:pl-12 md:pl-12 sm:pl-2
                  lg:ml-5 md:ml-5 sm:ml-2
                  gap-2 sm:gap-4 ${className}`}
    >
      <span>{label}</span>

      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="peer hidden"
      />

      <span
        className="w-5 h-5 ml-auto sm:ml-0
                   border bg-white border-gray-400 rounded-sm
                   flex items-center justify-center
                   peer-checked:after:content-['✔']
                   peer-checked:after:text-black
                   peer-checked:after:text-sm"
      />
    </label>
  );
};

export default CheckBox;

