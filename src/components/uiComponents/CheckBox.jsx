function CheckBox({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer mb-5">
        <div>{label}</div>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 appearance-none border border-gray-400 bg-white rounded
                   checked:bg-blue-600 checked:border-blue-600
                   checked:before:content-['✔'] checked:before:text-white
                   cursor-pointer"
      />
    </label>
  );
}

export default CheckBox;
