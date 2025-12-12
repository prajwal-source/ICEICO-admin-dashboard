function SingleCheckbox({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer ml-30">
      {label && <span>{label}</span>}

      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="
          h-4 w-4 appearance-none border border-gray-400 rounded-sm bg-white
          checked:before:content-['✔'] checked:before:text-black 
          checked:before:flex checked:before:items-center checked:before:justify-center
          cursor-pointer
        "
      />
    </label>
  );
}

export default SingleCheckbox;
