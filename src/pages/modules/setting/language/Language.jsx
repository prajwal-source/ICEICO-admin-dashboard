import React, { useState } from 'react'

import DataTable from '../../../../components/uiComponents/DataTable';

function Language() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2; // or calculate based on data length
const columns = [
  { header: "Language", field: "language" },
  { header: "Language code", field: "code" },
  { header: "Activity", field: "activity" }
];




  //    Dummy data
  const rows = [
  { "language": "Čeština", "code": "cs", "activity": "Inactive" },
  { "language": "Deutsch", "code": "de", "activity": "Inactive" },
  { "language": "English", "code": "en", "activity": "Active" },
  { "language": "Español", "code": "es", "activity": "Inactive" },
  { "language": "Polski", "code": "pl", "activity": "Inactive" },
  { "language": "Português", "code": "pt", "activity": "Inactive" },
  { "language": "Русский", "code": "ru", "activity": "Inactive" }
]


  return (
    <div className="min-h-screen p-2 md:p-0">

      {/* Main Box */}
      <div className="bg-white shadow-md rounded border px-4 py-3">

        {/* Breadcrumb */}
        <div className="text-sm mb-4 flex flex-wrap gap-1 md:gap-3">
          <button className='cursor-pointer px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded border'>Homepage</button>
          <button className='cursor-pointer px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded border'>Settings</button>
          <button className='cursor-pointer px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded border'>Languages</button>
        </div>

        {/* Title + Create User */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
            Languages
          </h2>

        </div>
        <div className="mb-5 text-left flex gap-4">
          <button className="bg-gray-300 border px-12 py-1 rounded hover:bg-gray-400 cursor-pointer">
            Create
          </button>
          <button className="bg-gray-300 border px-12 py-1 rounded hover:bg-gray-400 cursor-pointer">
            Connect
          </button>
        </div>

        {/* DataTable */}
        <div className='mb-8'>

        <DataTable
          columns={columns}
          data={rows}
          
          onActionClick={(row) => console.log("Deleted:", row)}
          
        />

        </div>
        
      </div>
    </div>
  )
}

export default Language;