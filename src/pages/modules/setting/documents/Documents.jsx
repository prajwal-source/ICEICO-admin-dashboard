import React, { useState } from 'react'
import DataTable from '../../../../components/uiComponents/DataTable';
import { useNavigate } from 'react-router';
import Breadcrumb from '../../../../components/uiComponents/BreadCrumb';

function Documents() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2; // or calculate based on data length
  const navigate = useNavigate();

  const columns = [
    { header: "Number", field: "number" },
    { header: "Name", field: "name" },
    { header: "Creation Date", field: "creation" },

  ];


  //    Dummy data
  const rows = [
    {
      number: "",
      name: "",
      creation: "",

    },

  ];

  return (
    <div className=" p-2 md:p-0">

        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Homepage", onClick: () => navigate("/service/user_manage") },
            { label: "Setting" },
            { label: "Document" } // last one → inactive
          ]}
        />
      {/* Main Box */}
      <div className="bg-white shadow-md rounded border px-4 py-3 ">


        {/* Title + Create User */}
        <div className=" ml-8 mb-5 flex">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-2">
            Documents
          </h2>

        </div>
        <div className='ml-8 mb-10 flex'>

          <button
            className="border px-8 py-2 rounded bg-gray-200 hover:bg-gray-300 cursor-pointer"
            onClick={() => navigate('/settings/document_create')}
          >
            Create Document
          </button>

        </div>

        {/* DataTable */}
        <div className='mb-10'>

          <DataTable
            columns={columns}
            data={rows}
          />
        </div>




      </div>
    </div >
  )
}

export default Documents;