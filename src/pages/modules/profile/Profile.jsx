import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import Breadcrumb from '../../../components/uiComponents/BreadCrumb';

function Profile() {
    const navigate = useNavigate();
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
    return (
        <div className="min-h-screen p-2 md:p-0">
            {/* Breadcrumb */}
            <Breadcrumb
                items={[
                    { label: "Homepage", onClick: () => navigate("/service/user_manage") },
                    { label: "Profile" } // last one → inactive
                ]}
            />
            {/* Main Box */}
            <div className="bg-white shadow-md rounded border px-4 py-3">
                {/* Title + Create User */}
                <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
                        My profile
                    </h2>
                </div>
                <div className="bg-gray-100 border rounded p-3 mb-4">
                    <div className='border bg-gray-50 rounded pl-4 mt-1'>Personal Data</div>
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 p-4 sm:p-6 rounded w-full text-sm max-w-3xl mx-auto"
                    >
                        {/*Login*/}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">Login </label>
                            <input
                                type="text"
                                name="name"
                                className="border w-full px-3 py-2 rounded bg-white"
                                placeholder="Login"
                            />
                        </div>
                        {/*Password*/}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">Password </label>
                            <button className='border p-2 rounded lg:w-45 md:w-45 sm:w-full bg-gray-300 hover:bg-gray-400' 
                            onClick={()=>navigate('/change_password')}>Change Password</button>
                        </div>
                        {/*Email*/}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">Email </label>
                            <input
                                type="text"
                                name="name"
                                className="border w-full px-3 py-2 rounded bg-white"
                                placeholder="support@rockfieldtrade.uk"
                            />
                        </div>
                        {/* Surname */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">Surname </label>
                            <input
                                type="text"
                                name="name"
                                className="border w-full px-3 py-2 rounded bg-white"
                                placeholder="https://rockfieldtrade.com"
                            />
                        </div>
                        {/* Name */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">Name </label>
                            <input
                                type="text"
                                name="name"
                                className="border w-full px-3 py-2 rounded bg-white"
                                placeholder="Name"
                            />
                        </div>
                        {/* Patronymic */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">Patronymic </label>
                            <input
                                type="text"
                                name="name"
                                className="border w-full px-3 py-2 rounded bg-white"
                                placeholder="Name"
                            />
                        </div>
                        {/* Passport */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">Passport </label>
                            <input
                                type="text"
                                name="name"
                                className="border w-full px-3 py-2 rounded bg-white"
                                placeholder="Name"
                            />
                        </div>
                        {/* Date of Birth */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">
                                Date of Birth
                            </label>

                            <input
                                type="date"
                                name="dateOfBirth"
                                max={new Date().toISOString().split("T")[0]} // disable future dates
                                className="border w-full px-3 py-2 rounded bg-white"
                            />
                        </div>
                    </form>
                    <div className='border bg-gray-50 rounded pl-4 mt-1'>Contacts</div>
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 p-4 sm:p-6 rounded w-full text-sm max-w-3xl mx-auto"
                    >   
                        {/* Phone */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">Phone </label>
                            <input
                                type="tel"
                                name="name"
                                className="border w-full px-3 py-2 rounded bg-white"
                                placeholder=""
                            />
                        </div>
                         {/* Country  */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">
                               Country
                            </label>
                            <select className="border  sm:w-64 px-3 py-2 rounded bg-white">
                                <option>Fill by hand</option>
                                <option>Use CRM data</option>
                                <option>Do not show</option>
                            </select>
                        </div>
                        {/* Region */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">Region </label>
                            <input
                                type="text"
                                name="name"
                                className="border w-full px-3 py-2 rounded bg-white"
                                placeholder="https://rockfieldtrade.com"
                            />
                        </div>
                        {/* City */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">City </label>
                            <input
                                type="text"
                                name="name"
                                className="border w-full px-3 py-2 rounded bg-white"
                                placeholder="Rockfieldtrade"
                            />
                        </div>
                        {/* Address */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">Address</label>
                            <input
                                type="text"
                                name="name"
                                className="border w-full px-3 py-2 rounded bg-white"
                                placeholder=""
                            />
                        </div>
                        {/* Postcode */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">Postcode</label>
                            <input
                                type="number"
                                name="name"
                                className="border w-full px-3 py-2 rounded bg-white"
                                placeholder=""
                            />
                        </div>
                          {/* Account activation */}
                        <label className="flex lg:pl-8 md:pl-8 sm:pl-2 items-center lg:ml-5 md:ml-5 sm:ml-1 gap-2 sm:gap-4 cursor-pointer">
                            <span className=''>Duplicate to email </span>
                            <input
                                type="checkbox"
                                name="sendLetters"
                                className="peer hidden"
                            />
                            <span
                                className=" w-5 h-5 ml-auto sm:ml-0 border bg-white border-gray-400 rounded-sm flex items-center justify-center peer-checked:after:content-['✔'] peer-checked:after:text-black peer-checked:after:text-s "
                            />
                        </label>
                         <div className=" p-4 rounded max-w-3xl">
                            {/* Upload logo row */}
                            <div className="flex flex-col sm:flex-row  sm:gap-6">
                                {/* Label */}
                                <span className="lg:ml-18 md:ml-18 p-3 lg:text-end md:text-end sm:text-left">
                                    Upload 
                                </span>
                                {/* File input */}
                                <div className="flex flex-col gap-1 w-full sm:w-auto">
                                    <input
                                        type="file"
                                        accept="image/png"
                                        className="block w-full sm:w-[420px] border bg-white rounded  file:mr-3 file:px-3 file:py-1.5  file:border file:rounded p-1  file:bg-gray-300 hover:file:bg-gray-400  text-sm"
                                    />
                                    <p className="text-xs text-gray-500 italic">
                                        File .png, no more than 1 MB. The logo size should not exceed 38×38 pixels.
                                    </p>
                                </div>
                            </div>

                        </div>
                        {/* Submit */}
                        <div className="flex justify-center pt-6">
                            <button
                                type="submit"
                                className="border px-6 py-2 rounded bg-gray-200 hover:bg-gray-300 cursor-pointer"
                            >
                                Edit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile;