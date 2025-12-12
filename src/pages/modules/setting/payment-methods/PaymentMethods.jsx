import { useState } from "react";
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

      {/* Main Box */}
      <div className="bg-white shadow-md rounded border px-4 py-3">


        {/* Breadcrumb */}
        <div className="text-sm mb-4 flex flex-wrap gap-1 md:gap-3">
          <button className='cursor-pointer px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded border'>Homepage</button>
          <button className='cursor-pointer px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded border'>Settings</button>
          <button className='cursor-pointer px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded border'>Payment methods</button>
        </div>

        {/* Title + Create User */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
            Payment methods
          </h2>
        </div>
        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            className={`px-4 py-2 border rounded ${activeTab === "withdrawal" ? "bg-gray-200" : ""}`}
            onClick={() => setActiveTab("withdrawal")}
          >
            Depositing
          </button>
          <button
            className={`px-4 py-2 border rounded ${activeTab === "depositing" ? "bg-gray-200" : ""}`}
            onClick={() => setActiveTab("depositing")}
          >
            Withdrawal
          </button>

        </div>

        {/* Language */}
        <div className='flex justify-start items-baseline-last text-center gap-4 mb-8'>
          <div className=''>Language : </div>
          <select
            name="userVerification"
            className="border w-100 ml-1 px-3 py-2 rounded bg-white"
          >
            <option >
              English
            </option>
          </select>
        </div>

        {/* PAYMENT GROUPS */}
        <div className="space-y-6">
          {groups.map((group, groupIndex) => (
            <div key={group.id} className="border p-4 bg-gray-100 rounded relative">

              {/* Remove group */}
              <button
                className="absolute top-2 right-2 text-red-500 text-xl"
                onClick={() => removeGroup(groupIndex)}
              >
                ✖
              </button>

              {/* Group Name */}
              <div className="mb-2 font-semibold">Payments group</div>
              {/* Group name */}
              <div className='flex justify-start ml-30 items-baseline-last text-center gap-4 mb-8'>
                <div className=''>Group name : </div>
                <input type="email" name="account" id="" placeholder='Senders Name' className="border w-100 ml-1 px-2 py-1 rounded bg-white text-left" />
              </div>

              {/* Payment Methods */}
              {group.methods.map((method, methodIndex) => (
                <div key={methodIndex} className="flex items-center gap-1 mb-2 ">
                  <span className="w-32 ml-28">Payment method</span>
                  <input
                    className="border px-2 bg-white py-1 w-100 rounded"
                    value={method}
                    onChange={(e) =>
                      updateMethod(groupIndex, methodIndex, e.target.value)
                    }
                  />


                 
                  {/* Settings Button */}
                  <button className="border px-3 py-1 rounded bg-gray-200">
                    Settings ▾
                  </button>
                </div>
              ))}
              {/* Add Method Button */}
              <div className="text-center mt-8">
                <button
                  className="border px-4 py-1 bg-gray-100 rounded shadow"
                  onClick={() => addMethod(groupIndex)}
                >
                  Add method
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add Group Button */}
        <div className="text-center mt-6">
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