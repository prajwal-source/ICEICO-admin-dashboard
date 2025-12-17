import React, { useState } from 'react'
import DataTable from '../../../../components/uiComponents/DataTable';
import Breadcrumb from '../../../../components/uiComponents/BreadCrumb';

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
       <Breadcrumb
          items={[
            { label: "Homepage", onClick: () => navigate("/service/user_manage") },
            { label: "Settings" },
            { label: "Language" } // last one → inactive
          ]}
        />
      {/* Main Box */}
      <div className="bg-white shadow-md rounded border px-4 py-3">
        {/* Title + Create User */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
            Languages
          </h2>
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