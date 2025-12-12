import React, { useState } from 'react'

import DataTable from '../../../../components/uiComponents/DataTable';
import Breadcrumb from '../../../../components/uiComponents/BreadCrumb';
import { useNavigate } from 'react-router';

function AccountType() {
  const navigate=useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2; // or calculate based on data length
const columns = [
  { header: "ID", field: "id" },
  { header: "Name", field: "name" },
  { header: "Server", field: "server" },
  { header: "Accounts / Archive", field: "accounts" },
  { header: "Group Type", field: "groupType" },
  { header: "Currency", field: "currency" }
];



  //    Dummy data
  const rows = [
  {
    "id": 1,
    "name": "Real",
    "server": "Rockfieldtrade",
    "accounts": 158,
    "archive": 86,
    "groupType": "Trading",
    "currency": "USD"
  },
  {
    "id": 2,
    "name": "Demo",
    "server": "Rockfieldtrade",
    "accounts": 236,
    "archive": 17,
    "groupType": "Trading (Demo)",
    "currency": "USD"
  }
];

  return (
    <div className="min-h-screen p-2 md:p-0">

       {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Homepage", onClick: () => navigate("/service/user_manage") },
            { label: "Setting" },
            { label: "Account Type" } // last one → inactive
          ]}
        />

      {/* Main Box */}
      <div className="bg-white shadow-md rounded border px-4 py-3">

        {/* Title + Create User */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
            Account Type
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
          actionLabel={true}
          onActionClick={(row) => console.log("Deleted:", row)}
          
        />

        </div>
        
      </div>
    </div>
  )
}

export default AccountType;