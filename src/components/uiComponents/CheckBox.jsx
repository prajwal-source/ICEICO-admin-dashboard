function CheckBox({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer mb-1 p-2">
      <div>{label}</div>

      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="
          h-4 w-4 appearance-none border border-gray-400 bg-white rounded
          flex items-center justify-center
          checked:border-black
          checked:before:content-['✔']
          checked:before:text-black
          checked:before:text-xs
          checked:before:leading-none
          cursor-pointer
        "
      />
    </label>
  );
}

export default CheckBox;
