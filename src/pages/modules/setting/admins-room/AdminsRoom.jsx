import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import CheckBox from '../../../../components/uiComponents/CheckBox';
import Breadcrumb from '../../../../components/uiComponents/BreadCrumb';
import { useNavigate } from 'react-router';

function AdminsRoom() {
  const navigate=useNavigate();
  const [logoPreview, setLogoPreview] = useState(null);

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

  const recipients = ["Without Confirmation", "Account Opening Are Disabled", "Trading And Funds Are Disabled", "Withdrawal Is Disabled", "Deposites Are Disabled"];

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
            { label: "Settings" },
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


        <div className="bg-gray-100  border rounded p-1 mb-4">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-6 shadow rounded w-full text-sm"
          >

            {/* Upload logo */}
            {/* Preview Section */}
            <div className="flex justify-start items-center gap-4 ml-30">
              <div className="">Logo:</div>

              {logoPreview ? (
                <img
                  src={logoPreview}
                  alt="Uploaded Logo"
                  className="h-12 w-12 object-contain  rounded-full"
                />
              ) : (
                <div className="text-gray-500">Logo</div>
              )}
            </div>

            {/* Upload Section */}
            <div className="flex justify-start items-center gap-4 ml-30 mt-4">
              <label className="">Upload Logo:</label>

              <input
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="bg-white border px-2 p-1 rounded w-64 cursor-pointer 
                     file:mr-4 file:py-1 file:px-4 file:border file:text-sm 
                     file:bg-gray-300 file:rounded hover:file:bg-gray-400"
              />
              <div className='text-gray-600'>File .png no more than 1 MB. The logo size should not exceed 38x38 pixel</div>
            </div>


            {/* Copyright */}
            <div className='flex justify-start ml-30 items-baseline-last text-center gap-4'>
              <div className=''>Copyrights : </div>
              <div className="border w-100 ml-1 px-2 py-1 rounded bg-white text-left">
                @RockField
              </div>
            </div>

            {/* maximum number of account */}
            <div className='flex justify-start ml-30 items-center text-center gap-4'>
              <div className=''>Maximum number of account 0 - without limit : </div>
              <input type="number" name="account" id="" placeholder='0' className="border w-100 ml-1 px-2 py-1 rounded bg-white text-left" />

            </div>
            {/* maximum number of requests */}
            <div className='flex justify-start ml-30 items-center text-center gap-4'>
              <div className=''>The maximum number of requests 0 - without limit : </div>
              <input type="number" name="account" id="" placeholder='0' className="border w-100 ml-1 px-2 py-1 rounded bg-white text-left" />
            </div>
            {/* maximum number of orders */}
            <div className='flex justify-start ml-30 items-center text-center gap-4'>
              <div className=''>Maximum number of orders : </div>
              <input type="number" name="account" id="" placeholder='1000' className="border w-100 ml-1 px-2 py-1 rounded bg-white text-left" />
            </div>

            {/* maximum number of orders */}
            <div className='flex justify-start ml-30 items-center text-center gap-4'>
              <div className=''>Currency Selection : </div>
              <input
                type="checkbox"
                class="h-4 w-4 pb-2 appearance-none border border-gray-400 rounded-sm bg-white
               checked:before:content-['✔'] checked:before:text-black 
               checked:before:flex checked:before:items-center checked:before:justify-center checked:before:mb-2
               cursor-pointer"
              />
            </div>

            {/* maximum number of orders */}
            <div className='flex justify-start ml-30 items-center text-center gap-4'>
              <div className=''>To limit session time : </div>
              <input
                type="checkbox"
                class="h-4 w-4 pb-2 appearance-none border border-gray-400 rounded-sm bg-white
               checked:before:content-['✔'] checked:before:text-black 
               checked:before:flex checked:before:items-center checked:before:justify-center checked:before:mb-2
               cursor-pointer"
              />
            </div>

            {/* Company name */}
            <div className='flex justify-start ml-30 items-baseline-last text-center gap-4'>
              <div className=''>Company name : </div>
              <div className="border w-100 ml-1 px-2 py-1 rounded bg-white text-left">
                Rockfieldtrade
              </div>
            </div>

            {/* Upload logo for Email*/}
            {/* Preview Section */}
            <div className="flex justify-start items-center gap-4 ml-30">
              <div className="">Logo:</div>

              {logoPreview ? (
                <img
                  src={logoPreview}
                  alt="Uploaded Logo"
                  className="h-25 w-25 object-contain"
                />
              ) : (
                <div className="text-gray-500">Logo For Eamils</div>
              )}
            </div>

            {/* Upload Section */}
            <div className="flex justify-start items-center gap-4 ml-30 mt-4">
              <label className="">Upload Logo For Emails :</label>

              <input
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="bg-white border px-2 p-1 rounded w-64 cursor-pointer 
                     file:mr-4 file:py-1 file:px-4 file:border file:text-sm 
                     file:bg-gray-300 file:rounded hover:file:bg-gray-400"
              />
              <div className='text-gray-600'>File .png no more than 1 MB. The logo size should not exceed 38x38 pixel</div>
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

            {/* Commercial box */}
            <div className='flex justify-start ml-30 items-baseline-last text-center gap-4'>
              <div className=''>Commercial Box : </div>
              <textarea
                rows="10"
                class="w-150 bg-white border rounded px-3 py-2"
                placeholder="Write your comment..."
              ></textarea>

            </div>

            {/* New request number*/}
            <div className='flex justify-start ml-30 items-center text-center gap-4'>
              <div className=''>New request number : </div>
              <input type="number" name="account" id="" placeholder='208' className="border w-100 ml-1 px-2 py-1 rounded bg-white text-left" />
            </div>

            {/* Addresses for withdrawal requests */}
            <div className='flex justify-start ml-30 items-baseline-last text-center gap-4'>
              <div className=''>Addresses for withdrawal requests : </div>
              <div className="border w-100 ml-1 px-2 py-1 rounded bg-white text-left">
                funds@rockfieldtrade.com
              </div>
            </div>

            {/* Confirmation of withdrawal by the trader */}
            <div className='flex justify-start ml-30 items-center text-center gap-4'>
              <div className=''>Confirmation of withdrawal by the trader : </div>
              <input
                type="checkbox"
                class="h-4 w-4 pb-2 appearance-none border border-gray-400 rounded-sm bg-white
               checked:before:content-['✔'] checked:before:text-black 
               checked:before:flex checked:before:items-center checked:before:justify-center checked:before:mb-2
               cursor-pointer"
              />
            </div>

            {/* Registration Url */}
            <div className='flex justify-start ml-30 items-baseline-last text-center gap-4'>
              <div className=''>Registration url : </div>
              <div className="border w-100 ml-1 px-2 py-1 rounded bg-white text-left">
                xyz
              </div>
            </div>
            {/* Admin room version */}
            <div className='flex justify-start ml-30 items-baseline-last text-center gap-4'>
              <div className=''>Admin room version : </div>
              <div className="font-bold">
                2.44.2
              </div>
            </div>

            <hr class="border-gray-500" />
            {/* --------------------------------******************* user verification *******************---------------------------- */}

            {/* User verification*/}
            <div className='flex justify-start ml-30 items-baseline-last text-center gap-4'>
              <div className=''>User verification : </div>
              <select
                name="userVerification"
                className="border w-100 ml-1 px-3 py-2 rounded bg-white"
              >
                {recipients.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>

            </div>
           
           
            {/* Changing the phone number on request */}
            <div className='flex justify-start ml-30 items-center text-center gap-4'>
              <div className=''>Changing the phone number on request : </div>
              <input
                type="checkbox"
                class="h-4 w-4 pb-2 appearance-none border border-gray-400 rounded-sm bg-white
               checked:before:content-['✔'] checked:before:text-black 
               checked:before:flex checked:before:items-center checked:before:justify-center checked:before:mb-2
               cursor-pointer"
              />
            </div>

           {/* Required documents */}
            <div className='flex justify-start ml-30 items-baseline-last text-center gap-4'>
              <div className=''>Required documents : </div>
              <textarea
                rows="10"
                class="w-150 bg-white border rounded px-3 py-2"
                placeholder="Write your comment..."
              ></textarea>

            </div>
          
          {/* Addresses for verification requests */}
            <div className='flex justify-start ml-30 items-baseline-last text-center gap-4'>
              <div className=''>Addresses for verification requests : </div>
              <div className="border w-100 ml-1 px-2 py-1 rounded bg-white text-left">
                verification@rockfieldtrade.com
              </div>
            </div>

            <hr class="border-gray-500" />
            {/* --------------------------------******************* Traders room setting *******************---------------------------- */}
        
            {/* Upload Banner*/}

            {/* Upload Section */}
            <div className="flex justify-start items-center gap-4 ml-30 mt-4">
              <label className="">Upload Banner :</label>

              <input
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="bg-white border px-2 p-1 rounded w-64 cursor-pointer 
                     file:mr-4 file:py-1 file:px-4 file:border file:text-sm 
                     file:bg-gray-300 file:rounded hover:file:bg-gray-400"
              />
              <div className='text-gray-600'>File .png no more than 1 MB. The logo size should not exceed 38x38 pixel</div>
            </div>

            {/* Preview Section */}
            <div className="flex justify-start items-center gap-4 ml-30">
              <div className="">Banner :</div>

              {logoPreview ? (
                <img
                  src={logoPreview}
                  alt="Uploaded Logo"
                  className="h-25 w-25 object-contain"
                />
              ) : (
                <div className="text-gray-500">Upload Banner</div>
              )}
            </div>

             {/* Link for banner */}
            <div className='flex justify-start ml-30 items-baseline-last text-center gap-4'>
              <div className=''>Link for banner : </div>
              <div className="border w-100 ml-1 px-2 py-1 rounded bg-white text-left">
                https://rockfieldtrade.com
              </div>
            </div>

             {/* Company website */}
            <div className='flex justify-start ml-30 items-baseline-last text-center gap-4'>
              <div className=''>Company website : </div>
              <div className="border w-100 ml-1 px-2 py-1 rounded bg-white text-left">
                https://rockfieldtrade.com
              </div>
            </div>

             {/* Name of company website */}
            <div className='flex justify-start ml-30 items-baseline-last text-center gap-4'>
              <div className=''>Name of company website : </div>
              <div className="border w-100 ml-1 px-2 py-1 rounded bg-white text-left">
                Rockfieldtrade
              </div>
            </div>

             {/* Information block */}
            <div className='flex justify-start ml-30 items-baseline-last text-center gap-4'>
              <div className=''>Information block : </div>
              <textarea
                rows="10"
                class="w-150 bg-white border rounded px-3 py-2"
                placeholder="Write your comment..."
              ></textarea>

            </div>

            {/* Personal manager */}
            <div className='flex justify-start ml-30 items-baseline-last text-center gap-4'>
              <div className=''>Personal manager : </div>
              <select
                name="recipient"
                className="border w-100 px-3 ml-1 py-2 rounded bg-white"
              >
                <option>Fill in by hand</option>
                <option>Do not show</option>
                <option>Use CRM data</option>
              </select>
            </div>

             {/* Upload Avatar */}
            <div className="flex justify-start items-center gap-4 ml-30 mt-4">
              <label className="">Upload Avatar :</label>

              <input
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="bg-white border px-2 p-1 rounded w-64 cursor-pointer 
                     file:mr-4 file:py-1 file:px-4 file:border file:text-sm 
                     file:bg-gray-300 file:rounded hover:file:bg-gray-400"
              />
              <div className='text-gray-600'>File .png no more than 1 MB. The logo size should not exceed 38x38 pixel</div>
            </div>

             {/* Name */}
            <div className='flex justify-start ml-30 items-baseline-last text-center gap-4'>
              <div className=''>Name : </div>
              <input type="text" name="account" id="" placeholder='Name' className="border w-100 ml-1 px-2 py-1 rounded bg-white text-left" />
            </div>
             {/* Lastname */}
            <div className='flex justify-start ml-30 items-baseline-last text-center gap-4'>
              <div className=''>Lastname : </div>
              <input type="text" name="account" id="" placeholder='Lastname' className="border w-100 ml-1 px-2 py-1 rounded bg-white text-left" />
            </div>
             {/* Job Position */}
            <div className='flex justify-start ml-30 items-baseline-last text-center gap-4'>
              <div className=''>Job Position : </div>
              <input type="text" name="account" id="" placeholder='Technical Support Specialist' className="border w-100 ml-1 px-2 py-1 rounded bg-white text-left" />
            </div>
             {/* Email */}
            <div className='flex justify-start ml-30 items-baseline-last text-center gap-4'>
              <div className=''>Email : </div>
              <input type="email" name="account" id="" placeholder='Lastname' className="border w-100 ml-1 px-2 py-1 rounded bg-white text-left" />
            </div>
             {/* Phone number */}
            <div className='flex justify-start ml-30 items-baseline-last text-center gap-4'>
              <div className=''>Phone number : </div>
              <input type="tel" name="account" id="" placeholder='Phone number' className="border w-100 ml-1 px-2 py-1 rounded bg-white text-left" />
            </div>
           

            {/* Default currency */}
            <div className='flex justify-start ml-30 items-baseline-last text-center gap-4'>
              <div className=''>Default currency : </div>
              <select
                name="recipient"
                className="border w-100 px-3 py-2 rounded bg-white"
              >
                <option>USD</option>
                <option>RUB</option>
                <option>EUR</option>
                <option>GBP</option>
                <option>TRY</option>
                <option>PLN</option>

              </select>
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

export default AdminsRoom;