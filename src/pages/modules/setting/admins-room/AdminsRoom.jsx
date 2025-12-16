import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Breadcrumb from '../../../../components/uiComponents/BreadCrumb';
import { useNavigate } from 'react-router';

function AdminsRoom() {
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

    const onSubmit = (data) => {
        console.log("Template Saved:", data);
    };

    return (
        <div className="min-h-screen p-2 md:p-0">

            {/* Breadcrumb */}
            <Breadcrumb
                items={[
                    { label: "Homepage", onClick: () => navigate("/service/user_manage") },
                    { label: "Setting" },
                    { label: "Admins Room" } // last one → inactive
                ]}
            />

            {/* Main Box */}
            <div className="bg-white shadow-md rounded border px-4 py-3">

                {/* Title + Create User */}
                <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
                        Admins Room
                    </h2>
                </div>
                <div className="bg-gray-100 border rounded p-3 mb-4">
                    <div className='border bg-gray-50 rounded pl-4 mt-1'>Settings</div>
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 p-4 sm:p-6 rounded w-full text-sm max-w-3xl mx-auto"
                    >   
                     <div className=" p-4 rounded max-w-3xl">
                            {/* Logo row */}
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-6 mb-4">
                                {/* Label */}
                                <span className="lg:ml-27 md:ml-27 sm:ml-0 text-center sm:text-left">
                                    Logo
                                </span>
                                {/* Logo preview */}
                                <div className="w-[38px] h-[38px]">
                                    <img
                                        src="/logo.png"   // replace with your logo path
                                        alt="Logo"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                            {/* Upload logo row */}
                            <div className="flex flex-col sm:flex-row  sm:gap-6">
                                {/* Label */}
                                <span className="lg:ml-9 md:ml-9 p-3 lg:text-end md:text-end sm:text-left">
                                    Upload logo
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
                        {/* Copyrights */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">Copyrights </label>
                            <input
                                type="text"
                                name="name"
                                className="border w-full px-3 py-2 rounded bg-white"
                                placeholder="© Rockfieldtrade."
                            />
                        </div>
                        {/* The maximum number of accounts 0 - without limit */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">The maximum number of accounts 0 - without limit </label>
                            <input
                                type="number"
                                name="name"
                                className="border w-full px-3 py-2 rounded bg-white"
                                placeholder="0"
                            />
                        </div>
                        {/* The maximum number of requests 0 - without limit */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">The maximum number of requests 0 - without limit </label>
                            <input
                                type="text"
                                name="name"
                                className="border w-full px-3 py-2 rounded bg-white"
                                placeholder="0"
                            />
                        </div>
                        {/* Maximum number of orders */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">Maximum number of orders </label>
                            <input
                                type="text"
                                name="name"
                                className="border w-full px-3 py-2 rounded bg-white"
                                placeholder="1000"
                            />
                        </div>
                        {/*Currency selection*/}
                        <label className="flex lg:pl-4 md:pl-4  sm:pl-2 items-center lg:ml-8 md:ml-8 sm:ml-2 gap-2 sm:gap-4 cursor-pointer">
                            <span className=''>Currency selection </span>
                            <input
                                type="checkbox"
                                name="sendLetters"
                                className="peer hidden"
                            />
                            <span
                                className=" w-5 h-5 ml-auto sm:ml-0 border bg-white border-gray-400 rounded-sm flex items-center justify-center peer-checked:after:content-['✔'] peer-checked:after:text-black peer-checked:after:text-s "
                            />
                        </label>
                        {/*To limit session time*/}
                        <label className="flex lg:pl-2 md:pl-2  sm:pl-2 items-center lg:ml-7 md:ml-7 sm:ml-2 gap-2 sm:gap-4 cursor-pointer">
                            <span className=''>To limit session time </span>
                            <input
                                type="checkbox"
                                name="sendLetters"
                                className="peer hidden"
                            />
                            <span
                                className=" w-5 h-5 ml-auto sm:ml-0 border bg-white border-gray-400 rounded-sm flex items-center justify-center peer-checked:after:content-['✔'] peer-checked:after:text-black peer-checked:after:text-s "
                            />
                        </label>
                        {/* Company name */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">Company name </label>
                            <input
                                type="text"
                                name="name"
                                className="border w-full px-3 py-2 rounded bg-white"
                                placeholder='Rockfieldtrade'
                            />
                        </div>

                        <div className=" p-4 rounded max-w-3xl">
                            {/* Logo for emails */}
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-6 mb-4">
                                {/* Label */}
                                <span className="lg:ml-12 md:ml-12 sm:ml-0 text-center sm:text-left">
                                    Logo for emails
                                </span>
                                {/* Logo preview */}
                                <div className="w-[38px] h-[38px]">
                                    <img
                                        src="/logo.png"   // replace with your logo path
                                        alt="Logo"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                            {/* Upload logo row */}
                            <div className="flex flex-col sm:flex-row lg:gap-1  sm:gap-6">
                                {/* Label */}
                                <span className=" p-2 lg:text-end md:text-end sm:text-left">
                                    Upload logo for emails
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

                        {/*Password generation*/}
                        <label className="flex lg:pl-5.5 md:pl-5.5 sm:pl-2 items-center lg:ml-3 md:ml-3 sm:ml-2 gap-2 sm:gap-4 cursor-pointer">
                            <span className=''>Password generation </span>
                            <input
                                type="checkbox"
                                name="sendLetters"
                                className="peer hidden"
                            />
                            <span
                                className=" w-5 h-5 ml-auto sm:ml-0 border bg-white border-gray-400 rounded-sm flex items-center justify-center peer-checked:after:content-['✔'] peer-checked:after:text-black peer-checked:after:text-s "
                            />
                        </label>
                        {/* Confirmation of acceptance of each document */}
                        <label className="flex lg:pl-0 md:pl-0 sm:pl-2 items-center lg:ml-0 md:ml-0 sm:ml-2 gap-2 sm:gap-4 cursor-pointer">
                            <span className=''>Confirmation of acceptance <br /> of each document </span>
                            <input
                                type="checkbox"
                                name="sendLetters"
                                className="peer hidden"
                            />
                            <span
                                className=" w-5 h-5 ml-auto sm:ml-0 border bg-white border-gray-400 rounded-sm flex items-center justify-center peer-checked:after:content-['✔'] peer-checked:after:text-black peer-checked:after:text-s "
                            />
                        </label>
                        {/* Create accounts while performing a registration */}
                        <label className="flex lg:pl-1.5 md:pl-1.5 sm:pl-2 items-center lg:ml-1 md:ml-1 sm:ml-1 gap-2 sm:gap-4 cursor-pointer">
                            <span className=''>Create accounts while <br /> performing a registration </span>
                            <input
                                type="checkbox"
                                name="sendLetters"
                                className="peer hidden"
                            />
                            <span
                                className=" w-5 h-5 ml-auto sm:ml-0 border bg-white border-gray-400 rounded-sm flex items-center justify-center peer-checked:after:content-['✔'] peer-checked:after:text-black peer-checked:after:text-s "
                            />
                        </label>

                        {/* The main page at the first log-in */}
                        <label className="flex lg:pl-3.5 md:pl-3.5 sm:pl-2 items-center lg:ml-5 md:ml-5 sm:ml-1 gap-2 sm:gap-4 cursor-pointer">
                            <span className=''>The main page at the <br /> first log-in </span>
                            <input
                                type="checkbox"
                                name="sendLetters"
                                className="peer hidden"
                            />
                            <span
                                className=" w-5 h-5 ml-auto sm:ml-0 border bg-white border-gray-400 rounded-sm flex items-center justify-center peer-checked:after:content-['✔'] peer-checked:after:text-black peer-checked:after:text-s "
                            />
                        </label>

                        {/* Skip user account activation via emailn */}
                        <label className="flex lg:pl-9 md:pl-9 sm:pl-2 items-center lg:ml-3 md:ml-3 sm:ml-1 gap-2 sm:gap-4 cursor-pointer">
                            <span className=''>Skip user account <br /> activation via email </span>
                            <input
                                type="checkbox"
                                name="sendLetters"
                                className="peer hidden"
                            />
                            <span
                                className=" w-5 h-5 ml-auto sm:ml-0 border bg-white border-gray-400 rounded-sm flex items-center justify-center peer-checked:after:content-['✔'] peer-checked:after:text-black peer-checked:after:text-s "
                            />
                        </label>
                        {/*Send an email when the employee logs in */}
                        <label className="flex lg:pl-4 md:pl-4 sm:pl-2 items-center lg:ml-5 md:ml-5 sm:ml-1 gap-2 sm:gap-4 cursor-pointer">
                            <span className=''>Send an email when <br /> the employee logs in </span>
                            <input
                                type="checkbox"
                                name="sendLetters"
                                className="peer hidden"
                            />
                            <span
                                className=" w-5 h-5 ml-auto sm:ml-0 border bg-white border-gray-400 rounded-sm flex items-center justify-center peer-checked:after:content-['✔'] peer-checked:after:text-black peer-checked:after:text-s "
                            />
                        </label>
                        {/* Account activation */}
                        <label className="flex lg:pl-8 md:pl-8 sm:pl-2 items-center lg:ml-5 md:ml-5 sm:ml-1 gap-2 sm:gap-4 cursor-pointer">
                            <span className=''>Account activation </span>
                            <input
                                type="checkbox"
                                name="sendLetters"
                                className="peer hidden"
                            />
                            <span
                                className=" w-5 h-5 ml-auto sm:ml-0 border bg-white border-gray-400 rounded-sm flex items-center justify-center peer-checked:after:content-['✔'] peer-checked:after:text-black peer-checked:after:text-s "
                            />
                        </label>
                        {/* Demo account deposits */}
                        <label className="flex lg:pl-4.5 md:pl-4.5 sm:pl-2 items-center lg:ml-1 md:ml-1 sm:ml-1 gap-2 sm:gap-4 cursor-pointer">
                            <span className=''>Demo account deposits </span>
                            <input
                                type="checkbox"
                                name="sendLetters"
                                className="peer hidden"
                            />
                            <span
                                className=" w-5 h-5 ml-auto sm:ml-0 border bg-white border-gray-400 rounded-sm flex items-center justify-center peer-checked:after:content-['✔'] peer-checked:after:text-black peer-checked:after:text-s "
                            />
                        </label>

                        {/* Text */}
                        <div className="grid ml-5 grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-4">
                            <label className="pt-2">Commercial block </label>
                            <textarea
                                rows={8}
                                onChange={(e) => setText(e.target.value)}
                                className="border w-full p-3 rounded bg-white"

                            />
                        </div>

                        {/* New request number */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">New request number </label>
                            <input
                                type="number"
                                name="name"
                                className="border w-full px-3 py-2 rounded bg-white"
                                placeholder="208"
                            />
                        </div>
                        {/* Addresses for withdrawal requests */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">Addresses for withdrawal requests </label>
                            <input
                                type="number"
                                name="name"
                                className="border w-full px-3 py-2 rounded bg-white"
                                placeholder="funds@rockfieldtrade.com"
                            />
                        </div>

                        {/* Confirmation of withdrawal by the trader */}
                        <label className="flex lg:pl-1 md:pl-1  sm:pl-2 items-center lg:ml-1 md:ml-1 sm:ml-2 gap-2 sm:gap-4 cursor-pointer">
                            <span className=''>Confirmation of withdrawal <br /> by the trader </span>
                            <input
                                type="checkbox"
                                name="sendLetters"
                                className="peer hidden"
                            />
                            <span
                                className=" w-5 h-5 ml-auto sm:ml-0 border bg-white border-gray-400 rounded-sm flex items-center justify-center peer-checked:after:content-['✔'] peer-checked:after:text-black peer-checked:after:text-s "
                            />
                        </label>
                        {/* Registration URL */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">Registration URL </label>
                            <input
                                type="number"
                                name="name"
                                className="border w-full px-3 py-2 rounded bg-white"
                                placeholder=""
                            />
                        </div>
                        {/* Admin's Room version */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right"> Admin's Room version </label>
                            <label htmlFor="">2.45.4</label>
                        </div>

                    </form>

                    <div className='border bg-gray-50 rounded pl-4 mt-1'>Settings</div>
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 p-4 sm:p-6 rounded w-full text-sm max-w-3xl mx-auto"
                    >

                        {/* Sttaus  */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">
                                User verification
                            </label>
                            <select className="border  sm:w-64 px-3 py-2 rounded bg-white">
                                <option>Without confirmation</option>
                                <option>Account opening is disabled</option>
                                <option>Trading and fund withdrawals are disabled</option>
                                <option>Withdrawals are disabled</option>
                                <option>Deposits are disabled</option>
                            </select>
                        </div>

                        {/* Changing the phone number on request */}
                        <label className="flex lg:pl-7 md:pl-7  sm:pl-2 items-center lg:ml-1 md:ml-1 sm:ml-2 gap-2 sm:gap-4 cursor-pointer">
                            <span className=''>Changing the phone <br />number on request </span>
                            <input
                                type="checkbox"
                                name="sendLetters"
                                className="peer hidden"
                            />
                            <span
                                className=" w-5 h-5 ml-auto sm:ml-0 border bg-white border-gray-400 rounded-sm flex items-center justify-center peer-checked:after:content-['✔'] peer-checked:after:text-black peer-checked:after:text-s "
                            />
                        </label>
                        {/* Required documents */}
                        <div className="grid ml-5 grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-4">
                            <label className="pt-2">Required documents </label>
                            <textarea
                                rows={8}
                                onChange={(e) => setText(e.target.value)}
                                className="border w-full p-3 rounded bg-white"

                            />
                        </div>
                    </form>
                    <div className='border bg-gray-50 rounded pl-4 mt-1'>Trader's Room settings</div>
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 p-4 sm:p-6 rounded w-full text-sm max-w-3xl mx-auto"
                    >   

                       <div className=" p-4 rounded max-w-3xl">
                            {/* Logo for emails */}
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-6 mb-4">
                                {/* Label */}
                                <span className="lg:ml-12 md:ml-12 sm:ml-0 text-center sm:text-left">
                                    Logo for emails
                                </span>
                                {/* Logo preview */}
                                <div className="w-[38px] h-[38px]">
                                    <img
                                        src="/logo.png"   // replace with your logo path
                                        alt="Logo"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                            {/* Upload logo row */}
                            <div className="flex flex-col sm:flex-row lg:gap-1  sm:gap-6">
                                {/* Label */}
                                <span className=" p-2 lg:text-end md:text-end sm:text-left">
                                    Upload logo for emails
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
                        {/* Link for banner */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">Link for banner </label>
                            <input
                                type="text"
                                name="name"
                                className="border w-full px-3 py-2 rounded bg-white"
                                placeholder="https://rockfieldtrade.com"
                            />
                        </div>
                        {/* Company website */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">Company website </label>
                            <input
                                type="text"
                                name="name"
                                className="border w-full px-3 py-2 rounded bg-white"
                                placeholder="https://rockfieldtrade.com"
                            />
                        </div>
                        {/* Name of company website */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">Name of company website </label>
                            <input
                                type="text"
                                name="name"
                                className="border w-full px-3 py-2 rounded bg-white"
                                placeholder="Rockfieldtrade"
                            />
                        </div>
                        {/* Information block */}
                        <div className="grid ml-5 grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-4">
                            <label className="pt-2">Information block </label>
                            <textarea
                                rows={8}
                                onChange={(e) => setText(e.target.value)}
                                className="border w-full p-3 rounded bg-white"

                            />
                        </div>
                        {/* Personal manager  */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">
                                Personal manager
                            </label>
                            <select className="border  sm:w-64 px-3 py-2 rounded bg-white">
                                <option>Fill by hand</option>
                                <option>Use CRM data</option>
                                <option>Do not show</option>
                            </select>
                        </div>

                        {/* Name */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">Name </label>
                            <input
                                type="text"
                                name="name"
                                className="border w-full px-3 py-2 rounded bg-white"
                                placeholder='John'
                            />
                        </div>
                        {/* Last name */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">Last name </label>
                            <input
                                type="number"
                                name="name"
                                className="border w-full px-3 py-2 rounded bg-white"
                                placeholder="Smith"
                            />
                        </div>
                        {/*Job position */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">Job position </label>
                            <input
                                type="number"
                                name="name"
                                className="border w-full px-3 py-2 rounded bg-white"
                                placeholder="Technical Support Specialist"
                            />
                        </div>
                        {/* Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">Email </label>
                            <input
                                type="number"
                                name="name"
                                className="border w-full px-3 py-2 rounded bg-white"
                                placeholder=""
                            />
                        </div>
                        {/* Phone numberi */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">Phone number </label>
                            <input
                                type="number"
                                name="name"
                                className="border w-full px-3 py-2 rounded bg-white"
                                placeholder=""
                            />
                        </div>


                        {/* Default currency  */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right ">
                                Default currency
                            </label>
                            <select className="border px-3 py-2 rounded bg-white">
                                <option className=''>USD</option>
                                <option>RUB</option>
                                <option>EUR</option>
                            </select>
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

export default AdminsRoom;