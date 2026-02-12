import React, { useState } from 'react'
import PaymentGroup from '../depositing/existing-payment-groups/PaymentGroup';
import NewPaymentGroup from '../depositing/new-payment-group/NewPaymentGroup';
import { Plus } from 'lucide-react';
export const DummyData = [
  {
    id: 1,
    groupName: "Withdrawal",
    methods: [
      {
        id: 11,
        paymentMethod: "Bank Local Withdrawal",
        methodDescription: "Bank",
        paymentSystem: "Local Bank Withdrawal",
        instruction: "",
        logo: ""
      }
    ]
  },
  {
    id: 2,
    groupName: "Withdrawal",
    methods: [
      {
        id: 21,
        paymentMethod: "Crypro Withdrawal",
        methodDescription: "Bank",
        paymentSystem: "Crypro Withdrawal",
        instruction: "",
        logo: ""
      }
    ]
  }
  
];
function Withdrawal() {
  const [existingGroups, setExistingGroups] = useState(DummyData);

  const [addGroup, setAddGroup] = useState([]);

  //Dynamic component rendering
  const handleAddGroup = () => {
    setAddGroup([...addGroup, { id: Date.now() }])
  }
  // remove Existing Group
  const handleRemoveExistingGroup = (id) => {
    const isConfirmed = window.confirm("Are you sure you want to remove this Group?");

    if (isConfirmed) {
      setExistingGroups(existingGroups.filter(group => group.id !== id));
    }
  };

  // remove Group
  const removeGroup = (id) => {
    const isConfirmed = window.confirm("Are you sure you want to remove this Group?");

    if (isConfirmed) {
      setAddGroup(addGroup.filter((group) => group.id !== id));
    }
  };
  return (
    <>
      <div >
        {existingGroups.map((GroupData) => (
          <PaymentGroup
            key={GroupData.id}
            Data={GroupData}
            removeExistingGroup={handleRemoveExistingGroup}

          />
        ))}
        <div className='border p-2 bg-gray-100 mb-1'>
          {/* New Group */}
          <div>
            {addGroup.map(group => (
              <NewPaymentGroup
                key={group.id}
                removeId={group.id}
                removeGroup={removeGroup}
              />
            ))}
          </div>
          {/* heading inside box */}
          <div className='flex justify-center bg-white ml-3 font-bold rounded mb-3 pl-2 border w-50'>Payment Group</div>
          <div>

            <button className=' cursor-pointer rounded my-8 py-1 bg-gray-200 border border-gray-500 w-40'
              onClick={handleAddGroup}
            >
              <div className='flex gap-1 justify-center'>
                <Plus />  <span>New Group</span>
              </div>
            </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default Withdrawal