function SingleCheckbox({ label, checked, onChange }) {
  return (
    <label
      className="
        flex items-center gap-3 cursor-pointer
        ml-0 sm:ml-30
        text-sm sm:text-base
      "
    >
      {label && (
        <span className="select-none">{label}</span>
      )}

      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="
          h-5 w-5 sm:h-4 sm:w-4
          appearance-none border border-gray-400 rounded-sm bg-white
          flex items-center justify-center
          checked:before:content-['✔']
          checked:before:text-black
          checked:before:text-sm
          checked:before:leading-none
          cursor-pointer
        "
      />
    </label>
  );
}

export default SingleCheckbox;

