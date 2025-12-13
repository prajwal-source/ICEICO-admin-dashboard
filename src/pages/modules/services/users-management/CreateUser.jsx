import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import CheckBox from '../../../../components/uiComponents/CheckBox';
import { useNavigate } from 'react-router';
import Breadcrumb from '../../../../components/uiComponents/BreadCrumb';

function CreateUser() {
    const navigate = useNavigate();
    const [logoPreview, setLogoPreview] = useState(null);
    const handleSetting = () => {
        navigate('/settings/authentication_settings')
    }
    const handleCodes = () => {
        navigate('/settings/authentication_settings/codes')
    }
    const handleLogoUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setLogoPreview(URL.createObjectURL(file)); // creates preview URL
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

    const checkboxList = [
        "Password generation",
        "Confirmation of acceptance of each document",
        "Create accounts while performing a registration",
        "The main page at the first log-in",
        "Skip user account activation via email",
        "Send an email when the employee logs in",
        "Account activation",
        "Demo account deposits",

    ];


    const [checkedValues, setCheckedValues] = useState(
        Array(checkboxList.length).fill(false)
    );

    const handleCheckboxChange = (index) => {
        const updated = [...checkedValues];
        updated[index] = !updated[index];
        setCheckedValues(updated);
    };

    return (
        <div className="min-h-screen p-2 md:p-0">

            {/* Breadcrumb */}
            <Breadcrumb
                items={[
                    { label: "Homepage", onClick: () => navigate("/service/user_manage") },
                    { label: "Service" },
                    { label: "Users Management" },
                    { label: "Create User" } // last one → inactive
                ]}
            />

            {/* Main Box */}
            <div className="bg-white shadow-md rounded border px-4 py-3">

                {/* Title + Create User */}
                <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
                        Create User
                    </h2>
                </div>

                <div className="bg-gray-100  border rounded p-1 mb-4">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 p-6 shadow rounded w-full text-sm"
                    >
                        <div className='border bg-gray-300 rounded pl-4'>Account</div>
                        <div className="flex justify-center">
                            <div className="space-y-4">

                                {/* Login */}
                                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                                    <label>Login :</label>
                                    <input
                                        type="text"
                                        name="surname"
                                        className="border w-80 px-2 py-1 rounded bg-white"
                                    />
                                </div>

                                {/* Password */}
                                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                                    <label>Password :</label>
                                    <input
                                        type="password"
                                        name="name"
                                        className="border w-80 px-2 py-1 rounded bg-white"
                                    />
                                </div>

                                {/* Email */}
                                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                                    <label>Email :</label>
                                    <input
                                        type="email"
                                        name="patronymic"
                                        className="border w-80 px-2 py-1 rounded bg-white"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='border bg-gray-300 rounded pl-4 mt-1'>Personal Data</div>
                        <div className="flex justify-center">
                            <div className="space-y-4">

                                {/* Surname */}
                                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                                    <label>Surname :</label>
                                    <input
                                        type="text"
                                        name="surname"
                                        className="border w-80 px-2 py-1 rounded bg-white"
                                    />
                                </div>

                                {/* Name */}
                                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                                    <label>Name :</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="border w-80 px-2 py-1 rounded bg-white"
                                    />
                                </div>

                                {/* Patronymic */}
                                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                                    <label>Patronymic :</label>
                                    <input
                                        type="text"
                                        name="patronymic"
                                        className="border w-80 px-2 py-1 rounded bg-white"
                                    />
                                </div>

                                {/* Passport */}
                                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                                    <label>Passport :</label>
                                    <input
                                        type="text"
                                        name="passport"
                                        className="border w-80 px-2 py-1 rounded bg-white"
                                    />
                                </div>

                                {/* Gender */}
                                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                                    <label>Gender :</label>
                                    <select
                                        name="gender"
                                        className="border w-80 px-3 py-2 rounded bg-white"
                                    >
                                        <option>Not Indicated</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>

                            </div>
                        </div>


                        <div className='border bg-gray-300 rounded pl-4 mt-1'>Contacts</div>
                        <div className="flex justify-center">
                            <div className="space-y-4">

                                {/* Phone */}
                                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                                    <label>Phone :</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="border w-full sm:w-80 px-2 py-1 rounded bg-white"
                                    />
                                </div>

                                {/* Country */}
                                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                                    <label>Country :</label>
                                    <select
                                        name="country"
                                        className="border w-full sm:w-80 px-3 py-2 rounded bg-white"
                                    >
                                        <option>India</option>
                                        <option>Russia</option>
                                        <option>Japan</option>
                                    </select>
                                </div>

                                {/* Region */}
                                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                                    <label>Region :</label>
                                    <input
                                        type="text"
                                        name="region"
                                        className="border w-full sm:w-80 px-2 py-1 rounded bg-white"
                                    />
                                </div>

                                {/* City */}
                                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                                    <label>City :</label>
                                    <input
                                        type="text"
                                        name="city"
                                        className="border w-full sm:w-80 px-2 py-1 rounded bg-white"
                                    />
                                </div>

                                {/* Address */}
                                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                                    <label>Address :</label>
                                    <input
                                        type="text"
                                        name="address"
                                        className="border w-full sm:w-80 px-2 py-1 rounded bg-white"
                                    />
                                </div>

                                {/* Postcode */}
                                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                                    <label>Postcode :</label>
                                    <input
                                        type="text"
                                        name="postcode"
                                        className="border w-full sm:w-80 px-2 py-1 rounded bg-white"
                                    />
                                </div>

                            </div>
                        </div>

                        <div className='border bg-gray-300 rounded pl-4 mt-1'>Access</div>

                        <div className="flex justify-center">
                            <div className="space-y-4">

                                {/* Status */}
                                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                                    <label>Status :</label>
                                    <select
                                        name="status"
                                        className="border w-full sm:w-80 px-3 py-2 rounded bg-white"
                                    >
                                        <option>Active</option>
                                    </select>
                                </div>

                                {/* User type */}
                                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                                    <label>User type :</label>
                                    <select
                                        name="userType"
                                        className="border w-full sm:w-80 px-3 py-2 rounded bg-white"
                                    >
                                        <option>Trader</option>
                                        <option>Admin</option>
                                        <option>Staff</option>
                                    </select>
                                </div>

                            </div>
                        </div>

                        {/* Submit button */}
                        <div className='flex justify-center gap-20 mt-10'>

                            <button className='mb-20 border px-6 py-2 rounded bg-gray-200 hover:bg-gray-300'
                                onClick={() => navigate('/service/exchange-rates')}>
                                Create
                            </button>


                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateUser;