import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import CheckBox from '../../../../components/uiComponents/CheckBox';
import { useNavigate } from 'react-router';

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

      {/* Main Box */}
      <div className="bg-white shadow-md rounded border px-4 py-3">

        {/* Breadcrumb */}
        <div className="text-sm mb-4 flex flex-wrap gap-1 md:gap-3">
          <button className='cursor-pointer px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded border'>Homepage</button>
          <button className='cursor-pointer px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded border'>Settings</button>
          <button className='cursor-pointer px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded border'>Login Confirmation</button>
        </div>

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
            {/* mailing service */}
            <div className='flex justify-start ml-30 items-baseline-last text-center gap-4'>
              <div className=''>Mailing Service : </div>
              <select
                name="userVerification"
                className="border w-100 ml-1 px-3 py-2 rounded bg-white"
              >
                <option >
                  UniSender
                </option>
              </select>
            </div>

            {/* API key */}
            <div className='flex justify-start ml-30 items-baseline-last text-center gap-4'>
              <div className=''>API Key : </div>
              <input type="text" name="account" id="" placeholder='API Key' className="border w-100 ml-1 px-2 py-1 rounded bg-white text-left" />
            </div>

            {/* Senders Name */}
            <div className='flex justify-start ml-30 items-baseline-last text-center gap-4'>
              <div className=''>Senders Name : </div>
              <input type="email" name="account" id="" placeholder='Senders Name' className="border w-100 ml-1 px-2 py-1 rounded bg-white text-left" />
            </div>

            {/* Enabled */}
            <div className='flex justify-start ml-30 items-center text-center gap-4'>
              <div className=''>Enabled : </div>
              <input
                type="checkbox"
                class="h-4 w-4 pb-2 appearance-none border border-gray-400 rounded-sm bg-white
               checked:before:content-['✔'] checked:before:text-black 
               checked:before:flex checked:before:items-center checked:before:justify-center checked:before:mb-2
               cursor-pointer"
              />
            </div>

            {/* Disable automatically */}
            <div className='flex justify-start ml-30 items-center text-center gap-4'>
              <div className=''>Disable automatically : </div>
              <input
                type="checkbox"
                class="h-4 w-4 pb-2 appearance-none border border-gray-400 rounded-sm bg-white
               checked:before:content-['✔'] checked:before:text-black 
               checked:before:flex checked:before:items-center checked:before:justify-center checked:before:mb-2
               cursor-pointer"
              />
            </div>

            {/* Admins room */}
            <div>
              <div className='flex justify-start ml-30 items-center text-center gap-4'>
                <div className=''>Admins room : </div>
                <input
                  type="checkbox"
                  class="h-4 w-4 pb-2 appearance-none border border-gray-400 rounded-sm bg-white
               checked:before:content-['✔'] checked:before:text-black 
               checked:before:flex checked:before:items-center checked:before:justify-center checked:before:mb-2
               cursor-pointer"
                />
              </div>
              <div className='flex justify-start ml-30 items-center text-center gap-4'>
                <div className=''>Admins room : </div>
                <input
                  type="checkbox"
                  class="h-4 w-4 pb-2 appearance-none border border-gray-400 rounded-sm bg-white
               checked:before:content-['✔'] checked:before:text-black 
               checked:before:flex checked:before:items-center checked:before:justify-center checked:before:mb-2
               cursor-pointer"
                />
              </div>
            </div>

            {/* Brokers Web Office */}
            <div>


              <div className='flex justify-start ml-30 items-center text-center gap-4'>
                <div className=''>Broker's web office : </div>
                <input
                  type="checkbox"
                  class="h-4 w-4 pb-2 appearance-none border border-gray-400 rounded-sm bg-white
               checked:before:content-['✔'] checked:before:text-black 
               checked:before:flex checked:before:items-center checked:before:justify-center checked:before:mb-2
               cursor-pointer"
                />
              </div>
              <div className='flex justify-start ml-30 items-center text-center gap-4'>
                <div className=''>Broker's web office : </div>
                <input
                  type="checkbox"
                  class="h-4 w-4 pb-2 appearance-none border border-gray-400 rounded-sm bg-white
               checked:before:content-['✔'] checked:before:text-black 
               checked:before:flex checked:before:items-center checked:before:justify-center checked:before:mb-2
               cursor-pointer"
                />
              </div>
            </div>

            <div className='border bg-gray-50 rounded pl-4 mt-1'>Additionally</div>

            {/* Language */}
            <div className='flex justify-start ml-30 items-baseline-last text-center gap-4'>
              <div className=''>Language : </div>
              <select
                name="userVerification"
                className="border w-100 ml-1 px-3 py-2 rounded bg-white"
              >
                <option >
                  English
                </option>
              </select>
            </div>


            {/* Text message template */}
            <div className='flex justify-start ml-30 items-baseline-last text-center gap-4'>
              <div className=''>Text message template : </div>
              <textarea
                rows="10"
                class="w-150 bg-white border rounded px-3 py-2"
                placeholder="Write your comment..."
              ></textarea>

            </div>
            {/* Help */}
            <div className='flex justify-start ml-30 items-baseline-last text-center gap-4'>
              <div className=''>Help : </div>
              <textarea
                rows="10"
                class="w-150 bg-white border rounded px-3 py-2"
                placeholder="Write your comment..."
              ></textarea>

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