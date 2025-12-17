import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import Breadcrumb from '../../../../components/uiComponents/BreadCrumb';

function AddWithdrawal() {
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
          { label: "Payment System", onClick: () => navigate("/settings/merchants_manage") },
          { label: "Payment system 8 (Withdrawal)" } // last one → inactive
        ]}
      />
      {/* Main Box */}
      <div className="bg-white shadow-md rounded border px-4 py-3">
        {/* Title + Create User */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
            Payment system 8 (Withdrawal)
          </h2>
        </div>
        <div className="bg-gray-100  border rounded p-1 mb-4">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-6 shadow rounded w-full text-sm"
          >
            <div className='border bg-gray-50 rounded pl-4'>Management</div>
            {/* ================= MAILING SERVICE ================= */}
            <div className="space-y-6 lg:ml-70 md:ml-5 sm:ml-5">
              {/* Enabled */}
              <label className="flex lg:pl-23 sm:pl-2 items-center lg:ml-8 sm:ml-2 gap-2 sm:gap-4 cursor-pointer">
                <span className='font-medium'>Enabled :</span>
                <input
                  type="checkbox"
                  name="sendLetters"
                  className="peer hidden"
                />
                <span
                  className=" w-5 h-5 ml-auto sm:ml-0 border bg-white border-gray-400 rounded-sm flex items-center justify-center peer-checked:after:content-['✔'] peer-checked:after:text-black peer-checked:after:text-s "
                />
              </label>
              {/* Disable Automatically */}
              <label className="flex lg:pl-17 sm:pl-2 items-center lg:ml-8 sm:ml-2 gap-2 sm:gap-4 cursor-pointer">
                <span className='font-medium'>Test System :</span>
                <input
                  type="checkbox"
                  name="sendLetters"
                  className="peer hidden"
                />
                <span
                  className=" w-5 h-5 ml-auto sm:ml-0 border bg-white border-gray-400 rounded-sm flex items-center justify-center peer-checked:after:content-['✔'] peer-checked:after:text-black peer-checked:after:text-s "
                />
              </label>
              {/* API Key */}
              <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-2 sm:gap-4 items-center">
                <label className="sm:text-right font-medium">
                  Name of the payment system
                </label>
                <input
                  type="text"
                  placeholder="Payment system 8"
                  className="border w-full sm:w-64 px-3 py-2 rounded bg-white"
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

export default AddWithdrawal;