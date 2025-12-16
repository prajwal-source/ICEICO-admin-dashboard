import React, { useState } from 'react'

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import Breadcrumb from '../../../components/uiComponents/BreadCrumb';

function ChangePassword() {
    const navigate = useNavigate();


    const handleCheckboxChange = (index) => {
        const updated = [...checkedValues];
        updated[index] = !updated[index];
        setCheckedValues(updated);
    };

    const { register, setValue, handleSubmit } = useForm({
        defaultValues: {
            recipient: "All",
            template: "",
            sendLetters: true,
            language: "English",
            subject: "",
            text: "",
        },
    });

    const onSubmit = (data) => {
        console.log("Template Saved:", data);
    };

    return (
        <div className="min-h-screen p-2 md:p-0">

            {/* Breadcrumb */}
            <Breadcrumb
                items={[
                    { label: "Homepage", onClick: () => navigate("/service/user_manage") },
                    { label: "Profile", onClick: () => navigate("/profile")},
                    { label: "Change password" } // last one → inactive
                ]}
            />

            {/* Main Box */}
            <div className="bg-white shadow-md rounded border px-4 py-3">

                {/* Title + Create User */}
                <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
                        Change password
                    </h2>
                </div>
                <div className="bg-gray-100 border rounded p-3 mb-4">
                    <div className='border bg-gray-50 rounded pl-4 mt-1'>Account</div>
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 p-4 sm:p-6 rounded w-full text-sm max-w-3xl mx-auto"
                    >   

                      
                        {/* Old password */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">Old password </label>
                            <input
                                type="password"
                                name="name"
                                className="border w-full px-3 py-2 rounded bg-white"
                                
                            />
                        </div>
                        {/* New password*/}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">New password </label>
                            <input
                                type="password"
                                name="name"
                                className="border w-full px-3 py-2 rounded bg-white"
                           
                            />
                        </div>
                        {/* Repeat password */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">Repeat password </label>
                            <input
                                type="password"
                                name="name"
                                className="border w-full px-3 py-2 rounded bg-white"
                              
                            />
                        </div>
                        {/* Submit */}
                        <div className="flex justify-center pt-6">
                            <button
                                type="submit"
                                className="border px-6 py-2 rounded bg-gray-200 hover:bg-gray-300 cursor-pointer"
                            >
                                Save
                            </button>
                        </div>

                    </form>
                </div>


            </div>
        </div>
    )
}

export default ChangePassword;