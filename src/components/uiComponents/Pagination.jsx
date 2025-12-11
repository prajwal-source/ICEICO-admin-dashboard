import React from "react";

const Pagination = ({
    currentPage = 1,
    totalPages = 1,
    onPageChange,
}) => {

    const handlePrev = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    return (
        <div className="flex justify-start items-center gap-2 text-sm mt-4 mb-4">

            {/* Previous */}
            <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className={`px-3 py-1 border rounded 
          ${currentPage === 1
                        ? "bg-gray-200 cursor-not-allowed"
                        : "bg-white hover:bg-gray-100 cursor-pointer"
                    }`}
            >
                Prev
            </button>

            {/* Page Numbers */}
            <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => onPageChange(index + 1)}
                        className={`
              px-3 py-1 rounded border
              ${currentPage === index + 1
                                ? "bg-blue-600 text-white"
                                : "bg-white hover:bg-gray-100"
                            }
            `}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

            {/* Next */}
            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 border rounded 
          ${currentPage === totalPages
                        ? "bg-gray-200 cursor-not-allowed"
                        : "bg-white hover:bg-gray-100 cursor-pointer"
                    }`}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
