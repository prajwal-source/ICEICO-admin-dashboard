import React, { useState } from 'react'

import DataTable from '../../../../components/uiComponents/DataTable';
import Breadcrumb from '../../../../components/uiComponents/BreadCrumb';

function Servers() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2; // or calculate based on data length
  const columns = [
    { header: "ID", field: "id" },
    { header: "Name", field: "name" },
    { header: "Type", field: "type" },
  
  ];


  //    Dummy data
  const rows = [
    {
      id:1,
      name: "EUR",
      type: "UTIP",
     
    },
 
  ];
  return (
    <div className="min-h-screen p-2 md:p-0">

       {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Homepage", onClick: () => navigate("/service/user_manage") },
            { label: "Settings" },
            { label: "Servers" } // last one → inactive
          ]}
        />

      {/* Main Box */}
      <div className="bg-white shadow-md rounded border px-4 py-3">

        {/* Title + Create User */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
            Servers
          </h2>

        </div>
        <div className="mb-5 text-left">
          <button className="bg-gray-300 border px-12 py-1 rounded hover:bg-gray-400 cursor-pointer">
            Create
          </button>
        </div>

        {/* DataTable */}
        <div className='mb-8'>

        <DataTable
          columns={columns}
          data={rows}
          actionLabel={true}
          onActionClick={(row) => console.log("Deleted:", row)}
          
        />

        </div>
        
      </div>
    </div>
  )
}

export default Servers;