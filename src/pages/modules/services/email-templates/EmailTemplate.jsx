import React, { useState } from 'react'
import Pagination from '../../../../components/uiComponents/Pagination';
import DataTable from '../../../../components/uiComponents/DataTable';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { MdHelpOutline } from 'react-icons/md';

function EmailTemplate() {

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

            {/* Main Box */}
            <div className="bg-white shadow-md rounded border px-4 py-3">

                {/* Breadcrumb */}
                <div className="text-sm mb-4 flex flex-wrap gap-1 md:gap-3">
                    <button className='cursor-pointer px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded border'>Homepage</button>
                    <button className='cursor-pointer px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded border'>Service</button>
                    <button className='cursor-pointer px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded border'>Email Templates</button>
                </div>

                {/* Title + Create User */}
                <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
                        Email Templates
                    </h2>

                </div>


                <div className="bg-gray-100  border rounded p-1 mb-4">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 p-6 shadow rounded w-full text-sm"
                    >
                        {/* Recipient */}
                        <div className='flex justify-start ml-30 items-baseline-last text-center gap-4'>
                            <div className=''>Recipient : </div>
                            <select
                                name="recipient"
                                className="border w-100 ml-1 px-3 py-2 rounded bg-white"
                            >
                                <option>All</option>
                                <option>Admins</option>
                                <option>Clients</option>
                            </select>
                        </div>


                        {/* Template */}

                        <div className='flex justify-start ml-30 items-baseline-last text-center gap-4'>
                            <div className=''>Template : </div>
                            <select
                                name="recipient"
                                className="border w-100 px-3 ml-1 py-2 rounded bg-white"
                            >
                                <option>Dummy-1</option>
                                <option>Dummy-2</option>
                                <option>Dummy-3</option>
                            </select>
                        </div>

                        {/* Send letters */}
                        <div className="flex justify-start ml-30 items-center text-center gap-1">
                            <label className="">Send letters</label>
                            <div className="cursor-pointer  "
                                title="If checked, emails will be sent automatically.">
                                  <MdHelpOutline size={20} className="text-gray-500 cursor-pointer" />

                            </div>
                           
                            <input type="checkbox" name="sendLetters" className="w-4 h-4" />
                        </div>

                        {/* Language */}
                        <div className='flex justify-start ml-30 items-baseline-last text-center gap-4'>
                            <div className=''>Language : </div>
                            <select
                                name="recipient"
                                className="border w-100 px-3 py-2 rounded bg-white"
                            >
                                <option>English</option>

                            </select>
                        </div>

                        {/* Subject */}
                        <div className='flex justify-start ml-30 items-baseline-last text-center gap-4'>
                            <div className=''>Subject : </div>
                            <input
                                name="subject"
                                className="border w-100 px-3 ml-4 py-2 rounded bg-white"
                                placeholder="Enter email subject"
                            />
                        </div>

                        {/* TEXT AREA WITH TOOLBAR */}
                        <div className='flex justify-start ml-30 items-baseline-last text-center gap-4'>
                            <div>Text : </div>
                            {/* Textarea */}
                            <textarea

                                onChange={(e) => setText(e.target.value)}
                                rows={10}
                                className="border w-150 ml-9 p-3 rounded bg-white"
                                placeholder="Write your email content here..."
                            ></textarea>
                        </div>

                        {/* Submit button */}
                        <div className='flex justify-start ml-80 gap-20 mt-10'>
                            <button className='mb-20 border px-6 py-2 rounded bg-gray-200 hover:bg-gray-300'
                                onClick={() => navigate('/service/exchange-rates')}>
                                Test
                            </button>

                            <button className='mb-20 border px-6 py-2 rounded bg-gray-200 hover:bg-gray-300'
                                onClick={() => navigate('/service/exchange-rates')}>
                                Save
                            </button>


                        </div>

                    </form>


                </div>




            </div>
        </div>
    )
}

export default EmailTemplate;