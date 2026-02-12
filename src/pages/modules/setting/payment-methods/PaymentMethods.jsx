import { useState } from "react";

import Withdrawal from "./withdrawal/Withdrawal";
import Depositing from "./depositing/Depositing";
import Breadcrumb from "../../../../components/uiComponents/BreadCrumb";
function PaymentMethods() {
  const [activeTab, setActiveTab] = useState("depositing");

  return (
    <div className="min-h-screen p-2 md:p-0">

      <Breadcrumb
        items={[
          { label: "Homepage", onClick: () => navigate("/service/user_manage") },
          { label: "Settings" },
          { label: "Payment Methods" } // last one → inactive
        ]}
      />

      {/* Main Box */}
      <div className="bg-white shadow-md rounded border px-4 py-3">
        {/* Title + Create User */}
        <div className="mb-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
            Payment methods
          </h2>
        </div>
        {/* ================= TABS ================= */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
          <button
            className={`px-4 py-2 border rounded ${activeTab === "withdrawal" ? "bg-gray-200" : ""
              }`}
            onClick={() => setActiveTab("depositing")}
          >
            Depositing
          </button>
          <button
            className={`px-4 py-2 border rounded ${activeTab === "depositing" ? "bg-gray-200" : ""
              }`}
            onClick={() => setActiveTab("withdrawal")}
          >
            Withdrawal
          </button>
        </div>
        {/* ================= LANGUAGE ================= */}
        <div className="grid grid-cols-1 md:flex  sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center mb-5">
          <label className="sm:text-right font-medium">Language :</label>

          <select className="border w-full sm:w-60 px-5 py-1 rounded bg-white">
            <option>English</option>
          </select>
        </div>
        
        {/* Tabs For Withdrawal and Depositing */}
        {activeTab==='withdrawal'?<Withdrawal/>:<Depositing/>}

        {/* Footer Buttons */}
        <div className="flex justify-center gap-4 mt-8">

          <button className=" w-26 py-2 bg-gray-200 border rounded">Save</button>
          <button className="w-26 py-2 bg-gray-200 border rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethods;