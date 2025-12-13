import React, { useState } from 'react'
import Pagination from '../../../../components/uiComponents/Pagination';
import DataTable from '../../../../components/uiComponents/DataTable';
import Breadcrumb from '../../../../components/uiComponents/BreadCrumb';

function ALAReport() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 2; // or calculate based on data length
    const columns = [
        { header: "Conversion From", field: "from" },
        { header: "Conversion To", field: "to" },
        { header: "Central Bank Rate", field: "bank_rate" },
        { header: "Self Rate", field: "note" },
    ];


    //    Dummy data
    const rows = [
        {
            from: "EUR",
            to: "ARS",
            bank_rate: "ARS/EUR: 0.00059",
            note: "",
        },
        {
            from: "GBP",
            to: "ARS",
            bank_rate: "ARS/GBP: 0.00052",
            note: "",
        },
        {
            from: "PLN",
            to: "ARS",
            bank_rate: "ARS/PLN: 0.00253",
            note: "",
        },
        {
            from: "RUB",
            to: "ARS",
            bank_rate: "ARS/RUB: 0.05420",
            note: "",
        }
    ];
    return (
        <div className="min-h-screen p-2 md:p-0">
            {/* Breadcrumb */}
            <Breadcrumb
                items={[
                    { label: "Homepage", onClick: () => navigate("/service/user_manage") },
                    { label: "Service" },
                    { label: "Email templates" } // last one → inactive
                ]}
            />
            {/* Main Box */}
            <div className="bg-white shadow-md rounded border px-4 py-3">

                {/* Title + Create User */}
                <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
                        ALA Reports
                    </h2>

                </div>

                {/* Filter Section */}
                {/* Info Section */}
                <div
                    className=" bg-yellow-50 border rounded p-3 sm:p-4 text-sm sm:text-base leading-relaxed hover:bg-yellow-100 mb-6 "
                >
                    <p>
                        The report shows the number of active live accounts with the broker.
                    </p>

                    <p className="mt-2">
                        If a trader has made any trading operation or made a deposit within a month,
                        the account will be included in this report.
                    </p>

                    <p className="mt-2">
                        The data in the report is being updated every day.
                    </p>
                </div>

                {/* Pagination */}
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) => {
                        console.log("Page changed to:", page);
                        setCurrentPage(page);
                    }}
                />
                {/* DataTable */}
                <DataTable
                    columns={columns}
                    data={rows}

                    onActionClick={(row) => console.log("Deleted:", row)}
                />

                {/* Pagination */}
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) => {
                        console.log("Page changed to:", page);
                        setCurrentPage(page);
                    }}
                />

            </div>
        </div>
    )
}

export default ALAReport;