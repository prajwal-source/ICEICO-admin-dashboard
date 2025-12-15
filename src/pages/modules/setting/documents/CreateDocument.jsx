import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Breadcrumb from '../../../../components/uiComponents/BreadCrumb';
import { useNavigate } from 'react-router';

function CreateDocument() {
    const navigate=useNavigate();
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
                    { label: "Document",onClick:()=>navigate('/settings/documents_manage') }, //
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
                        <div className="flex lg:pl-25 md:pl-25 sm:pl-2 items-center lg:ml-8 md:ml-8 sm:ml-2  gap-2 sm:gap-4 cursor-pointer ">
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
                        <label className="flex lg:pl-19 md:pl-20 sm:pl-2 items-center lg:ml-8 md:ml-8 sm:ml-2 gap-2 sm:gap-4 cursor-pointer">
                            <span>Activity :</span>

                            <input
                                type="checkbox"
                                name="sendLetters"
                                className="peer hidden"
                            />

                            <span
                                className=" w-5 h-5 ml-auto sm:ml-0 border bg-white border-gray-400 rounded-sm flex items-center justify-center peer-checked:after:content-['✔'] peer-checked:after:text-black peer-checked:after:text-s "
                            />
                        </label>


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
                        {/* Registration */}
                        <label className="flex lg:pl-19 md:pl-20 sm:pl-2 items-center lg:ml-8 md:ml-8 sm:ml-2 gap-2 sm:gap-4 cursor-pointer">
                            <span>Activity :</span>

                            <input
                                type="checkbox"
                                name="activity"
                                className="peer hidden"
                            />
                            <span
                                className=" w-5 h-5 ml-auto sm:ml-0 border bg-white border-gray-400 rounded-sm flex items-center justify-center peer-checked:after:content-['✔']  peer-checked:after:text-black peer-checked:after:text-s  "
                            />
                        </label>

                        {/* Account opening */}
                        <label className="flex lg:pl-4 md:pl-5 sm:pl-2 items-center lg:ml-8 md:ml-8 sm:ml-2 gap-2 sm:gap-4 cursor-pointer">
                            <span>Account opening :</span>

                            <input
                                type="checkbox"
                                name="accountOpening"
                                className="peer hidden"
                            />

                            <span
                                className="  w-5 h-5 ml-auto sm:ml-0 border bg-white border-gray-400 rounded-sm flex items-center justify-center peer-checked:after:content-['✔'  peer-checked:after:text-black peer-checked:after:text-s"
                            />
                        </label>

                        {/* Account depositing */}
                        <label className="flex lg:pl-1 sm:pl-2 items-center lg:ml-7.5 md:pl-8 sm:ml-2 gap-2 sm:gap-4 cursor-pointer">
                            <span>Account depositing :</span>

                            <input
                                type="checkbox"
                                name="accountDepositing"
                                className="peer hidden"
                            />

                            <span
                                className=" w-5 h-5  ml-auto sm:ml-0  border bg-white border-gray-400 rounded-sm  flex items-center justify-center  peer-checked:after:content-['✔']  peer-checked:after:text-black  peer-checked:after:text-sm "
                            />
                        </label>

                        {/* Withdrawal */}
                        <label className="flex lg:pl-13 md:pl-14 sm:pl-2 items-center lg:ml-8 md:ml-8 sm:ml-2 gap-2 sm:gap-4 cursor-pointer">
                            <span>Withdrawal :</span>

                            <input
                                type="checkbox"
                                name="withdrawal"
                                className="peer hidden"
                            />

                            <span
                                className=" w-5 h-5 ml-auto sm:ml-0 border bg-white border-gray-400 rounded-sm flex items-center justify-center peer-checked:after:content-['✔'] peer-checked:after:text-black peer-checked:after:text-s "
                            />
                        </label>


                        {/* At the bottom on all the pages */}
                        <label className="flex items-center lg:pl-8 sm:pl-10 lg:ml-5 sm:ml-5 sm:gap-4 cursor-pointer">
                            <span>
                                At the bottom on <br /> all the pages
                            </span>

                            <input
                                type="checkbox"
                                name="sendLetters"
                                className="peer hidden"
                            />

                            <span
                                className=" w-5 h-5 ml-auto sm:ml-0 border bg-white border-gray-400 rounded-sm flex items-center justify-center peer-checked:after:content-['✔'] peer-checked:after:text-black peer-checked:after:text-sm"
                            />
                        </label>



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