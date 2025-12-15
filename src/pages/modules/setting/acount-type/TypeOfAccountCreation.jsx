import React, { useState } from 'react'

import { useForm } from 'react-hook-form';
import { MdHelpOutline } from 'react-icons/md';
import CheckBox from '../../../../components/uiComponents/CheckBox';
import Breadcrumb from '../../../../components/uiComponents/BreadCrumb';
import { useNavigate } from 'react-router';

function TypeOfAccountCreation() {
    const navigate = useNavigate();

    const checkboxList = [
        "Registration",
        "Account opening",
        "Account depositing",
        "Account depositing",
        "At the bottom on all the pages",

    ];

    const [checkedValues, setCheckedValues] = useState(
        Array(checkboxList.length).fill(false)
    );

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
                    { label: "Setting" },
                    { label: "Account Type", onClick: () => navigate("/settings/types") }, //
                    { label: "Account type creation" } // last one → inactive
                ]}
            />

            {/* Main Box */}
            <div className="bg-white shadow-md rounded border px-4 py-3">

                {/* Title + Create User */}
                <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
                        Account type creation
                    </h2>
                </div>
                <div className="bg-gray-100 border rounded p-3 mb-4">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 p-4 sm:p-6 rounded w-full text-sm max-w-3xl mx-auto"
                    >

                        {/* Name */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">Name :</label>
                            <input
                                type="text"
                                name="name"
                                className="border w-full px-3 py-2 rounded bg-white"
                                placeholder="Enter name"
                            />
                        </div>
                        {/* Server */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">Server :</label>
                            <div>Server</div>
                        </div>
                        {/* Currency */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">Currency :</label>
                            <input
                                type="text"
                                name="name"
                                className="border w-full px-3 py-2 rounded bg-white"
                                placeholder='USD'
                            />
                        </div>
                        {/* Min deposi */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">Min deposite :</label>
                            <input
                                type="number"
                                name="name"
                                className="border w-full px-3 py-2 rounded bg-white"
                                placeholder=""
                            />
                        </div>


                        {/* Hidden */}
                        <label className="flex lg:pl-19 sm:pl-2 items-center lg:ml-8 sm:ml-2 gap-2 sm:gap-4 cursor-pointer">
                            <span className=''>Hidden :</span>
                            <input
                                type="checkbox"
                                name="sendLetters"
                                className="peer hidden"
                            />
                            <span
                                className=" w-5 h-5 ml-auto sm:ml-0 border bg-white border-gray-400 rounded-sm flex items-center justify-center peer-checked:after:content-['✔'] peer-checked:after:text-black peer-checked:after:text-s "
                            />
                        </label>


                        {/* Show bonuses */}
                        <label className="flex lg:pl-11 sm:pl-2 items-center lg:ml-5 sm:ml-2 gap-2 sm:gap-4 cursor-pointer">
                            <span className=''>Show bonuses :</span>
                            <input
                                type="checkbox"
                                name="sendLetters"
                                className="peer hidden"
                            />
                            <span
                                className=" w-5 h-5 ml-auto sm:ml-0 border bg-white border-gray-400 rounded-sm flex items-center justify-center peer-checked:after:content-['✔'] peer-checked:after:text-black peer-checked:after:text-s "
                            />
                        </label>
                        {/* Demo*/}
                       <label className="flex lg:pl-21 sm:pl-2 items-center lg:ml-8 sm:ml-2 gap-2 sm:gap-4 cursor-pointer">
                            <span className=''>Demo :</span>
                            <input
                                type="checkbox"
                                name="sendLetters"
                                className="peer hidden"
                            />
                            <span
                                className=" w-5 h-5 ml-auto sm:ml-0 border bg-white border-gray-400 rounded-sm flex items-center justify-center peer-checked:after:content-['✔'] peer-checked:after:text-black peer-checked:after:text-s "
                            />
                        </label>
                        {/* Delay */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">Delay :</label>
                            <input
                                type="text"
                                name="name"
                                className="border w-full px-3 py-2 rounded bg-white"

                            />
                        </div>
                           {/* Trading permission on new accounts */}
                         <label className="flex lg:pl-4 sm:pl-2 items-center lg:ml-5 sm:ml-2 gap-2 sm:gap-4 cursor-pointer">
                            <span className=''>Trading permission :<br /> on new accounts </span>
                            <input
                                type="checkbox"
                                name="sendLetters"
                                className="peer hidden"
                            />
                            <span
                                className=" w-5 h-5 ml-auto sm:ml-0 border bg-white border-gray-400 rounded-sm flex items-center justify-center peer-checked:after:content-['✔'] peer-checked:after:text-black peer-checked:after:text-s "
                            />
                        </label>
                        {/*Spend bonuses  */}
                          <label className="flex lg:pl-10 sm:pl-2 items-center lg:ml-5 sm:ml-2 gap-2 sm:gap-4 cursor-pointer">
                            <span className=''>Spend bonuses :</span>
                            <input
                                type="checkbox"
                                name="sendLetters"
                                className="peer hidden"
                            />
                            <span
                                className=" w-5 h-5 ml-auto sm:ml-0 border bg-white border-gray-400 rounded-sm flex items-center justify-center peer-checked:after:content-['✔'] peer-checked:after:text-black peer-checked:after:text-s "
                            />
                        </label>

                        {/* Stop out */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">Stop out :</label>
                            <input
                                type="text"
                                className="border w-full px-3 py-2 rounded bg-white"
                                placeholder="20"
                            />
                        </div>
                        {/* Sttaus  */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">
                                Status :
                            </label>
                            <select className="border  sm:w-64 px-3 py-2 rounded bg-white">
                                <option>Free</option>
                                <option>Prof</option>
                                <option>Adaptive</option>
                            </select>
                        </div>
                        {/*Hide leverage*/}
                        <label className="flex lg:pl-12 sm:pl-2 items-center lg:ml-5 sm:ml-2 gap-2 sm:gap-4 cursor-pointer">
                            <span className=''>Hide leverage :</span>
                            <input
                                type="checkbox"
                                name="sendLetters"
                                className="peer hidden"
                            />
                            <span
                                className=" w-5 h-5 ml-auto sm:ml-0 border bg-white border-gray-400 rounded-sm flex items-center justify-center peer-checked:after:content-['✔'] peer-checked:after:text-black peer-checked:after:text-s "
                            />
                        </label>
                        {/* Leverage  */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right ">
                                Leverage :
                            </label>
                            <select className="border px-3 py-2 rounded bg-white">
                                <option className=''>Free</option>
                                <option>Prof</option>
                                <option>Adaptive</option>
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

export default TypeOfAccountCreation;