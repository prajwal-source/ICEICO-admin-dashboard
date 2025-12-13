import { useState } from "react";
import Breadcrumb from "../../../../components/uiComponents/BreadCrumb";
function PaymentMethods() {
  const [activeTab, setActiveTab] = useState("depositing");
  const [language, setLanguage] = useState("English");

  const [groups, setGroups] = useState([
    { id: Date.now(), name: "Local Bank Deposit", methods: ["Local Bank Deposit"] },
  ]);

  // Add new group
  const addGroup = () => {
    setGroups([
      ...groups,
      { id: Date.now(), name: "", methods: [""] }
    ]);
  };

  // Remove group
  const removeGroup = (index) => {
    setGroups(groups.filter((_, i) => i !== index));
  };

  // Update group name
  const updateGroupName = (index, value) => {
    const updated = [...groups];
    updated[index].name = value;
    setGroups(updated);
  };

  // Add method inside group
  const addMethod = (groupIndex) => {
    const updated = [...groups];
    updated[groupIndex].methods.push("");
    setGroups(updated);
  };

  // Update method
  const updateMethod = (groupIndex, methodIndex, value) => {
    const updated = [...groups];
    updated[groupIndex].methods[methodIndex] = value;
    setGroups(updated);
  };

  // Remove method
  const removeMethod = (groupIndex, methodIndex) => {
    const updated = [...groups];
    updated[groupIndex].methods = updated[groupIndex].methods.filter(
      (_, i) => i !== methodIndex
    );
    setGroups(updated);
  };

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
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
            Payment methods
          </h2>
        </div>
        {/* ================= TABS ================= */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">

          <button
            className={`px-4 py-2 border rounded ${activeTab === "withdrawal" ? "bg-gray-200" : ""
              }`}
            onClick={() => setActiveTab("withdrawal")}
          >
            Depositing
          </button>

          <button
            className={`px-4 py-2 border rounded ${activeTab === "depositing" ? "bg-gray-200" : ""
              }`}
            onClick={() => setActiveTab("depositing")}
          >
            Withdrawal
          </button>
        </div>


        {/* ================= LANGUAGE ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center mb-8">
          <label className="sm:text-right font-medium">Language :</label>

          <select className="border w-full sm:w-60 px-3 py-2 rounded bg-white">
            <option>English</option>
          </select>
        </div>

        {/* ================= PAYMENT GROUPS ================= */}
        <div className="space-y-6">
          {groups.map((group, groupIndex) => (
            <div
              key={group.id}
              className="border p-4 bg-gray-100 rounded relative"
            >
              {/* Remove Group */}
              <button
                className="absolute top-2 right-2 text-red-500 text-lg"
                onClick={() => removeGroup(groupIndex)}
              >
                ✖
              </button>

              <h4 className="font-semibold mb-4">Payments group</h4>

              {/* Group Name */}
              <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-center mb-6">
                <label className="sm:text-right font-medium">
                  Group name :
                </label>
                <input
                  type="text"
                  placeholder="Senders Name"
                  className="border w-full px-3 py-2 rounded bg-white"
                />
              </div>

              {/* Payment Methods */}
              <div className="space-y-4">
                {group.methods.map((method, methodIndex) => (
                  <div
                    key={methodIndex}
                    className="grid grid-cols-1 sm:grid-cols-[160px_1fr_auto] gap-2 sm:gap-4 items-center"
                  >
                    <label className="sm:text-right font-medium">
                      Payment method :
                    </label>

                    <input
                      className="border px-3 py-2 rounded bg-white w-full"
                      value={method}
                      onChange={(e) =>
                        updateMethod(groupIndex, methodIndex, e.target.value)
                      }
                    />

                    <button className="border px-3 py-2 rounded bg-gray-200 w-full sm:w-auto">
                      Settings ▾
                    </button>
                  </div>
                ))}
              </div>

              {/* Add Method */}
              <div className="flex justify-center mt-6">
                <button
                  className="border px-4 py-2 bg-gray-200 rounded shadow"
                  onClick={() => addMethod(groupIndex)}
                >
                  Add method
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ================= ADD GROUP ================= */}
        <div className="flex justify-center mt-6">
          <button
            className="border px-6 py-2 bg-gray-200 rounded shadow"
            onClick={addGroup}
          >
            + New group
          </button>
        </div>


        {/* Footer Buttons */}
        <div className="flex justify-center gap-4 mt-8">

          <button className="px-6 py-2 bg-gray-100 border rounded">Save</button>
          <button className="px-6 py-2 bg-gray-100 border rounded">Cancel</button>
        </div>

      </div>
    </div>
  );
}

export default PaymentMethods;