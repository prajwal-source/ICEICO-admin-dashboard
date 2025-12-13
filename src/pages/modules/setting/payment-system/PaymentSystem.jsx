import React, { useState } from 'react'

import DataTable from '../../../../components/uiComponents/DataTable';
import Breadcrumb from '../../../../components/uiComponents/BreadCrumb';

function PaymentSystem() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2; // or calculate based on data length
  const columns = [
    { header: "Name", field: "name" },
    { header: "Status", field: "status" },
  
  ];


  //    Dummy data
  const rows = [
    {
      name: "EUR",
      status: "on",
     
    },
    {
      name: "GBP",
      status: "on",
      
    },
    {
      name: "PLN",
      status: "on",
     
    },
    {
      name: "RUB",
      status: "on",
     
    }
  ];
  return (
    <div className="min-h-screen p-2 md:p-0">

      
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Homepage", onClick: () => navigate("/service/user_manage") },
            { label: "Settings" },
            { label: "Pyament System" } // last one → inactive
          ]}
        />

      {/* Main Box */}
      <div className="bg-white shadow-md rounded border px-4 py-3">
        {/* Title + Create User */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
            Payment Systems
          </h2>

        </div>

        <div className='w-full h-30 mb-5 bg-white border'>Space for banner</div>
        <div className="mb-5 text-left">
          <div className="mb-2">Deposit of funds</div>

          <button className="bg-gray-300 border px-12 py-1 rounded hover:bg-gray-400">
            Add
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
        
        <div className="mb-5 text-left">
          <div className="mb-2">Withdrawal</div>

          <button className="bg-gray-300 border px-12 py-1 rounded hover:bg-gray-400">
            Add
          </button>
        </div>

        {/* DataTable */}
        <DataTable
          columns={columns}
          data={rows}
          actionLabel={true}
          onActionClick={(row) => console.log("Deleted:", row)}
        />



      </div>
    </div>
  )
}

export default PaymentSystem;