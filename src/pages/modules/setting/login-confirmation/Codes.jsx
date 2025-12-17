import React, { useState } from 'react';
import DataTable from '../../../../components/uiComponents/DataTable';
import { useNavigate } from 'react-router';
import Breadcrumb from '../../../../components/uiComponents/BreadCrumb';

const Codes = () => {
    const navigate = useNavigate();
    const handleSetting = () => {
        navigate('/settings/authentication_settings')
    }
    const handleCodes = () => {
        navigate('/settings/authentication_settings/codes')
    }
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

    ];

    return (
        <div className="min-h-screen p-2 md:p-0">
            <Breadcrumb
                items={[
                    { label: "Homepage", onClick: () => navigate("/service/user_manage") },
                    { label: "Settings" },
                    { label: "Codes" } // last one → inactive
                ]}
            />
            {/* Main Box */}
            <div className="bg-white shadow-md rounded border px-4 py-3">
                {/* Title + Create User */}
                <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
                        Login Confirmation
                    </h2>
                </div>
                {/* buttons */}
                <div className="mb-5 text-left flex gap-4">
                    <button className="bg-gray-300 border px-12 py-1 rounded hover:bg-gray-400 cursor-pointer" onClick={handleSetting}>
                        Settings
                    </button>
                    <button className="bg-white border px-12 py-1 rounded  cursor-pointer" onClick={handleCodes}>
                        Codes
                    </button>
                </div>
                {/* Filter Section */}
                <div className="bg-gray-100 border rounded p-3 mb-6 ">
                    <div className="flex flex-wrap items-center text-center gap-2">

                            <span className=''>Key word:</span>
                        <label className="flex flex-col md:flex-row gap-1 md:gap-2">
                            <input type="text" className="bg-white border p-1 rounded" />
                        </label>

                        <button className="cursor-pointer ml-20 md:ml-20 px-6 py-1 bg-gray-300 hover:bg-gray-400 border rounded">
                            Search
                        </button>
                    </div>
                </div>
                {/* DataTable */}
                <DataTable
                    columns={columns}
                    data={rows}
                    actionLabel={true}
                    onActionClick={(row) => console.log("Deleted:", row)}
                />
            </div>
        </div>
    );
};

export default Codes;
