import React, { useState } from 'react';
import DataTable from '../../../../components/uiComponents/DataTable';
import Pagination from '../../../../components/uiComponents/Pagination';


const UserManagement = () => {
    
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 2; // or calculate based on data length

    const columns = [
        { header: "ID", field: "id" },
        {
            header: "Name and Surname",
            field: "name",
            render: (value) => (
                <button className="text-blue-600 underline hover:text-blue-800">
                    {value}
                </button>
            ),
        },
        { header: "Login", field: "login" },
        { header: "Email", field: "email" },
        { header: "Registration date", field: "date" },
        { header: "Type", field: "type" },
        { header: "City", field: "city" },

    ];
    //    Dummy data
    const rows = [
        {
            id: 296,
            name: "Ameet Deshmukh",
            login: "amitdesh…",
            email: "amitdesh@gmail.com",
            date: "04.12.2025 14:20",
            type: "trader",
            city: "",
        },
        {
            id: 295,
            name: "Krishna Paliha",
            login: "ksjdmk…",
            email: "ksjdmkdmd@gmail.com",
            date: "02.12.2025 19:01",
            type: "trader",
            city: "",
        },
        {
            id: 294,
            name: "Rohit Sharma",
            login: "rohitsha…",
            email: "rohitsharma@gmail.com",
            date: "01.12.2025 10:45",
            type: "investor",
            city: "Mumbai",
        },
        {
            id: 293,
            name: "Priya Verma",
            login: "priyave…",
            email: "priyaverma@gmail.com",
            date: "30.11.2025 08:15",
            type: "trader",
            city: "Delhi",
        },
        {
            id: 292,
            name: "Suresh Kumar",
            login: "sureshk…",
            email: "sureshkumar@gmail.com",
            date: "29.11.2025 16:32",
            type: "admin",
            city: "",
        }
    ];


    return (
        <div className="min-h-screen p-2 md:p-0">

            {/* Main Box */}
            <div className="bg-white shadow-md rounded border px-4 py-3">

                {/* Breadcrumb */}
                <div className="text-sm mb-4 flex flex-wrap gap-1 md:gap-3">
                    <button className='cursor-pointer px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded border'>Homepage</button>
                    <button className='cursor-pointer px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded border'>Service</button>
                    <button className='cursor-pointer px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded border'>User</button>
                </div>

                {/* Title + Create User */}
                <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
                        Users management
                    </h2>

                    <button className="cursor-pointer px-4 py-2 bg-gray-200 rounded border hover:bg-gray-300">
                        Create user
                    </button>
                </div>

                {/* Filter Section */}
                <div className="bg-gray-100 border rounded p-3 mb-6">
                    <div className="flex flex-wrap items-center gap-4">

                        <label className="flex flex-col md:flex-row gap-1 md:gap-2">
                            <span>Start:</span>
                            <input type="text" className=" bg-white border p-1 rounded" />
                        </label>

                        <label className="flex flex-col md:flex-row gap-1 md:gap-2">
                            <span>End:</span>
                            <input type="text" className="bg-white border p-1 rounded" />
                        </label>

                        <label className="flex flex-col md:flex-row gap-1 md:gap-2">
                            <span>Key word:</span>
                            <input type="text" className="bg-white border p-1 rounded" />
                        </label>

                        <label className="flex items-center gap-2">
                            <span>Payment system tester:</span>
                            <input type="checkbox" />
                        </label>

                        <button className="cursor-pointer ml-auto md:ml-20 px-4 py-1 bg-gray-200 hover:bg-gray-300 border rounded">
                            Search
                        </button>
                    </div>
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
                    actionLabel={true}
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
    );
};

export default UserManagement;
