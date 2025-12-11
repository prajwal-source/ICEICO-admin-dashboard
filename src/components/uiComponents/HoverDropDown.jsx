import React from "react";

const HoverDropDown = ({ label, items = [] }) => {
    
  return (
    <div className="relative group">

      {/* Menu Button */}
      <button className="px-3 py-1 bg-gray-200 rounded cursor-pointer border hover:bg-gray-400">
        {label}
      </button>

      {/* Dropdown Wrapper (keeps hover active & positions menu) */}
      <div className="absolute left-0 top-full pt-3 hidden group-hover:block z-20">

        {/* Dropdown Box */}
        <div className="relative bg-black/70 text-white w-48 rounded-md shadow-lg p-2 overflow-visible">

          {/* Arrow FIXED here */}
          <div className="absolute -top-2 left-4 w-3 h-3 bg-black/70 rotate-45"></div>

          <ul className="flex flex-col gap-2 mt-1">
            {items.map((item, idx) => (
              <li
                key={idx}
                onClick={item.onClick}
                className="px-2 py-1 hover:bg-black rounded cursor-pointer"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default HoverDropDown;
