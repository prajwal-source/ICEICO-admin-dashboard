import React, { useState } from 'react'

import { useForm } from 'react-hook-form';
import { MdHelpOutline } from 'react-icons/md';
import CheckBox from '../../../../components/uiComponents/CheckBox';

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

            {/* Main Box */}
            <div className="bg-white shadow-md rounded border px-4 py-3">

                {/* Breadcrumb */}
                <div className="text-sm mb-4 flex flex-wrap gap-1 md:gap-3">
                    <button className='cursor-pointer px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded border'>Homepage</button>
                    <button className='cursor-pointer px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded border'>Setting</button>
                    <button className='cursor-pointer px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded border'>Document</button>
                    <button className='cursor-pointer px-3 py-1  hover:bg-gray-400 rounded border'>Create a document</button>
                </div>

                {/* Title + Create User */}
                <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
                        Create a document
                    </h2>

                </div>


                <div className="bg-gray-100  border rounded p-1 mb-4">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 p-6 shadow rounded w-full text-sm"
                    >

                        {/* Name */}
                        <div className='flex justify-start ml-30 items-baseline-last text-center gap-4'>
                            <div className=''>Name : </div>
                            <input
                                type='text'
                                name="name"
                                className="border w-100 px-3 ml-4 py-2 rounded bg-white"
                                placeholder="Enter name"
                            />
                        </div>

                        {/* TEXT AREA WITH TOOLBAR */}
                        <div className='flex justify-start ml-30 items-baseline-last text-center gap-4'>
                            <div>Description : </div>
                            {/* Textarea */}
                            <textarea

                                onChange={(e) => setText(e.target.value)}
                                rows={10}
                                className="border w-150 ml-2 p-3 rounded bg-white"

                            ></textarea>
                        </div>

                        <div className="flex items-center gap-6 ml-20">
                            <label className="w-20 text-right">File</label>

                            <label className="bg-red-900 text-white px-4 py-2 rounded cursor-pointer hover:bg-red-800">
                                Upload a file
                                <input
                                    type="file"
                                    className="hidden"
                                    onChange={(e) => console.log(e.target.files[0])}
                                />
                            </label>
                        </div>


                        {/* Activity */}
                        <div className='flex justify-start ml-30 items-center text-center gap-4'>
                            <div className=''>Activity : </div>
                            <input
                                type="checkbox"
                                class="h-4 w-4 pb-2 appearance-none border border-gray-400 rounded-sm bg-white
                                       checked:before:content-['✔'] checked:before:text-black 
                                       checked:before:flex checked:before:items-center checked:before:justify-center checked:before:mb-2
                                       cursor-pointer"
                            />
                        </div>


                        {/* Sort order */}
                        <div className='flex justify-start ml-30 items-baseline-last text-center gap-4'>
                            <div className=''>Sort order : </div>
                            <input
                                type='text'
                                name="name"
                                className="border w-100 px-3 ml-4 py-2 rounded bg-white"
                                placeholder="1"
                            />
                        </div>
                        {/* Checkboxes */}
                        <div className="ml-30  mb-5">
                            {checkboxList.map((item, index) => (
                                <CheckBox
                                    key={index}
                                    label={item}
                                    checked={checkedValues[index]}
                                    onChange={() => handleCheckboxChange(index)}
                                />
                            ))}
                        </div>
                        {/* Submit button */}
                        <div className=' mt-10'>
                            <button className='mb-8 border px-6 py-2 rounded bg-gray-200 hover:bg-gray-300 cursor-pointer'
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