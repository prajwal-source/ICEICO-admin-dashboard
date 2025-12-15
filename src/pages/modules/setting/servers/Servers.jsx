import React, { useState } from 'react'

import DataTable from '../../../../components/uiComponents/DataTable';
import Breadcrumb from '../../../../components/uiComponents/BreadCrumb';
import { useNavigate } from 'react-router';

function Servers() {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate=useNavigate();
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
        <div className=" flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
            Servers
          </h2>

        </div>
         <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 pb-4">
          <button
            type="submit"
            onClick={()=>navigate("/settings/servers_create")}
            className="border px-8 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
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