import { useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function HoverDropDown({ label, items }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  const handleEnter = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
    setOpen(true);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => {
      setOpen(false);
    }, 150); // small delay = smooth UX
  };

  return (
    <div
      className="relative inline-block border bg-white rounded "
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Trigger */}
      <button
        type="button"
        className="flex items-center gap-1 px-2 py-1 hover:bg-gray-400 rounded"
      >
        {label}
        <MdKeyboardArrowDown size={18} />
      </button>

      {/* Dropdown */}
      <div
        className={`
          absolute left-0 mt-1 pl-4 pb-2 bg-black/70 text-gray-100 border rounded shadow-md
          min-w-[200px] z-50
          
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        {items.map((item, index) => (
          <button
            key={index}
            onClick={item.onClick}
            className="block w-full text-left px-3 py-2 hover:bg-black/90"
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default HoverDropDown;
