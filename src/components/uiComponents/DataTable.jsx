import React from "react";

const DataTable = ({ columns = [], data = [], actionLabel, onActionClick }) => {
    return (
        <div className="border rounded overflow-hidden w-full">

            {/* Desktop Table */}
            <table className="w-full border-collapse hidden md:table">
                <thead className="bg-gray-200 border-b">
                    <tr>
                        {columns.map((col, index) => (
                            <th
                                key={index}
                                className="text-center px-3 py-2 border-r font-semibold text-gray-700"
                            >
                                {col.header}
                            </th>
                        ))}

                        {actionLabel && <th className="px-3 py-2">{actionLabel}</th>}
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={`${rowIndex % 2 === 0 ? "bg-white" : "bg-gray-100"
                                } hover:bg-green-100 transition-colors`}
                        >
                            {columns.map((col, colIndex) => (
                                <td key={colIndex} className="px-3 py-2 border-r text-sm text-center">
                                    {typeof col.render === "function"
                                        ? col.render(row[col.field], row)
                                        : row[col.field]}
                                </td>
                            ))}

                            {actionLabel && (
                                <td className="px-3 py-2 text-center">
                                    <button
                                        onClick={() => onActionClick(row)}
                                        className="text-red-600 text-xl hover:scale-110 cursor-pointer"
                                    >
                                        ✖
                                    </button>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Mobile View */}
            <div className="md:hidden p-2 space-y-4">
                {data.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className="border rounded p-3 bg-white shadow-sm"
                    >
                        {columns.map((col, colIndex) => (
                            <div key={colIndex} className="flex justify-between py-1 text-sm">
                                <span className="font-semibold text-gray-600">{col.header}:</span>
                                <span>
                                    {typeof col.render === "function"
                                        ? col.render(row[col.field], row)
                                        : row[col.field]}
                                </span>
                            </div>
                        ))}

                        {/* Action Button */}
                        {actionLabel && (
                            <div className="text-right mt-2">
                                <button
                                    onClick={() => onActionClick(row)}
                                    className="text-red-600 text-xl hover:scale-110 cursor-pointer"
                                >
                                    ✖
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default DataTable;
