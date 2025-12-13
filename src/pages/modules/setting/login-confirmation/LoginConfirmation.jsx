import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import CheckBox from '../../../../components/uiComponents/CheckBox';
import { useNavigate } from 'react-router';
import Breadcrumb from '../../../../components/uiComponents/BreadCrumb';

function LoginConfirmation() {
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
      <Breadcrumb
        items={[
          { label: "Homepage", onClick: () => navigate("/service/user_manage") },
          { label: "Settings" },
          { label: "Login Confirmation" } // last one → inactive
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
          <button className="bg-white border px-12 py-1 rounded  cursor-pointer" onClick={handleSetting}>
            Settings
          </button>
          <button className="bg-gray-300 border px-12 py-1 rounded hover:bg-gray-400 cursor-pointer" onClick={handleCodes}>
            Codes
          </button>
        </div>



        <div className="bg-gray-100  border rounded p-1 mb-4">


          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-6 shadow rounded w-full text-sm"
          >
            <div className='border bg-gray-50 rounded pl-4'>Connection Settings</div>
            {/* ================= MAILING SERVICE ================= */}
            <div className="space-y-6">

              {/* Mailing Service */}
              <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-2 sm:gap-4 items-center">
                <label className="sm:text-right font-medium">
                  Mailing Service :
                </label>
                <select className="border w-full sm:w-64 px-3 py-2 rounded bg-white">
                  <option>UniSender</option>
                </select>
              </div>

              {/* API Key */}
              <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-2 sm:gap-4 items-center">
                <label className="sm:text-right font-medium">
                  API Key :
                </label>
                <input
                  type="text"
                  placeholder="API Key"
                  className="border w-full sm:w-64 px-3 py-2 rounded bg-white"
                />
              </div>

              {/* Sender Name */}
              <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-2 sm:gap-4 items-center">
                <label className="sm:text-right font-medium">
                  Sender Name :
                </label>
                <input
                  type="text"
                  placeholder="Sender Name"
                  className="border w-full sm:w-64 px-3 py-2 rounded bg-white"
                />
              </div>

              {/* Enabled */}
              <div className="grid grid-cols-1 sm:grid-cols-[180px_auto] gap-2 sm:gap-4 items-center">
                <label className="sm:text-right font-medium">
                  Enabled :
                </label>
                <input
                  type="checkbox"
                  className="
        h-5 w-5 appearance-none border border-gray-400 rounded-sm bg-white
        checked:before:content-['✔']
        checked:before:flex checked:before:items-center checked:before:justify-center
        cursor-pointer
      "
                />
              </div>

              {/* Disable Automatically */}
              <div className="grid grid-cols-1 sm:grid-cols-[180px_auto] gap-2 sm:gap-4 items-center">
                <label className="sm:text-right font-medium">
                  Disable automatically :
                </label>
                <input
                  type="checkbox"
                  className="
        h-5 w-5 appearance-none border border-gray-400 rounded-sm bg-white
        checked:before:content-['✔']
        checked:before:flex checked:before:items-center checked:before:justify-center
        cursor-pointer
      "
                />
              </div>

              {/* Admins Room */}
              <div className="grid grid-cols-1 sm:grid-cols-[180px_auto] gap-2 sm:gap-4 items-center">
                <label className="sm:text-right font-medium">
                  Admins room :
                </label>
                <input
                  type="checkbox"
                  className="
        h-5 w-5 appearance-none border border-gray-400 rounded-sm bg-white
        checked:before:content-['✔']
        checked:before:flex checked:before:items-center checked:before:justify-center
        cursor-pointer
      "
                />
              </div>

              {/* Broker's Web Office */}
              <div className="grid grid-cols-1 sm:grid-cols-[180px_auto] gap-2 sm:gap-4 items-center">
                <label className="sm:text-right font-medium">
                  Broker&apos;s web office :
                </label>
                <input
                  type="checkbox"
                  className="
        h-5 w-5 appearance-none border border-gray-400 rounded-sm bg-white
        checked:before:content-['✔']
        checked:before:flex checked:before:items-center checked:before:justify-center
        cursor-pointer
      "
                />
              </div>

            </div>

            <div className='border bg-gray-50 rounded pl-4 mt-1'>Additionally</div>

            {/* ================= LANGUAGE ================= */}
            <div className="space-y-6">

              {/* Language */}
              <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-2 sm:gap-4 items-center">
                <label className="sm:text-right font-medium">
                  Language :
                </label>

                <select
                  name="language"
                  className="border w-full sm:w-64 px-3 py-2 rounded bg-white"
                >
                  <option>English</option>
                </select>
              </div>

              {/* Text Message Template */}
              <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-2 sm:gap-4">
                <label className="sm:text-right font-medium pt-2">
                  Text message template :
                </label>

                <textarea
                  rows={6}
                  className="w-full bg-white border rounded px-3 py-2"
                  placeholder="Write your comment..."
                />
              </div>

              {/* Help */}
              <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-2 sm:gap-4">
                <label className="sm:text-right font-medium pt-2">
                  Help :
                </label>

                <textarea
                  rows={6}
                  className="w-full bg-white border rounded px-3 py-2"
                  placeholder="Write your comment..."
                />
              </div>

            </div>

            {/* Submit button */}
            <div className='flex justify-center gap-20 mt-10'>

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

export default LoginConfirmation;