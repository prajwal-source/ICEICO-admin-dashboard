function Breadcrumb({ items }) {
  return (
    <nav className="bg-white rounded py-2 px-4 border">
      <ol className="flex items-center text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center">
              {/* Breadcrumb link */}
              <button
                disabled={isLast}
                onClick={item.onClick}
                className={`px-2 text-gray-700 ${
                  isLast
                    ? "font-semibold text-gray-700 cursor-default"
                    : "hover:underline hover:text-gray-900"
                }`}
              >
                {item.label}
              </button>

              {/* Chevron separator */}
              {!isLast && (
                <svg
                  className="w-4 h-4 text-gray-400 mx-2"
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
