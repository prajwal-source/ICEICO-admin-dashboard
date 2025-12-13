function Breadcrumb({ items }) {
  return (
    <nav className="bg-white rounded border px-3 py-2">
      <ol
        className="
          flex items-center gap-1
          text-sm
          overflow-x-auto
          whitespace-nowrap
          scrollbar-hide
        "
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center shrink-0">
              {/* Breadcrumb item */}
              <button
                disabled={isLast}
                onClick={item.onClick}
                className={`
                  max-w-[120px] sm:max-w-none
                  truncate
                  px-2 py-1
                  ${
                    isLast
                      ? "font-semibold text-gray-800 cursor-default"
                      : "text-gray-600 hover:text-gray-900 hover:underline"
                  }
                `}
              >
                {item.label}
              </button>

              {/* Separator */}
              {!isLast && (
                <svg
                  className="w-4 h-4 text-gray-400 mx-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
