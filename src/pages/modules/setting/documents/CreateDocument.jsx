import React, { useState } from 'react'

import { useForm } from 'react-hook-form';
import { MdHelpOutline } from 'react-icons/md';
import CheckBox from '../../../../components/uiComponents/CheckBox';
import Breadcrumb from '../../../../components/uiComponents/BreadCrumb';

function CreateDocument() {

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
                    { label: "Document" }, //
                    { label: "Create a document" } // last one → inactive
                ]}
            />

            {/* Main Box */}
            <div className="bg-white shadow-md rounded border px-4 py-3">

                {/* Title + Create User */}
                <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
                        Create a document
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

                        {/* Description */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-start">
                            <label className="sm:text-right pt-2">Description :</label>
                            <textarea
                                rows={6}
                                onChange={(e) => setText(e.target.value)}
                                className="border w-full p-3 rounded bg-white"
                                placeholder="Enter description"
                            />
                        </div>

                        {/* File Upload */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">File :</label>
                            <label className="inline-flex w-fit bg-red-900 text-white px-4 py-2 rounded cursor-pointer hover:bg-red-800">
                                Upload a file
                                <input
                                    type="file"
                                    className="hidden"
                                    onChange={(e) => console.log(e.target.files[0])}
                                />
                            </label>
                        </div>

                        {/* Activity */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">Activity :</label>
                            <input
                                type="checkbox"
                                className="   h-5 w-5 appearance-none border border-gray-400 rounded-sm bg-white  flex items-center justify-center  checked:before:content-['✔']  checked:before:text-black  cursor-pointer "
                            />
                        </div>

                        {/* Sort order */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="sm:text-right">Sort order :</label>
                            <input
                                type="text"
                                className="border w-full px-3 py-2 rounded bg-white"
                                placeholder="1"
                            />
                        </div>

                        {/* Checkboxes */}
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4">
                            <div className="sm:text-right pt-1">Options :</div>
                            <div className="space-y-3">
                                {checkboxList.map((item, index) => (
                                    <CheckBox
                                        key={index}
                                        label={item}
                                        checked={checkedValues[index]}
                                        onChange={() => handleCheckboxChange(index)}
                                    />
                                ))}
                            </div>
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

export default CreateDocument;