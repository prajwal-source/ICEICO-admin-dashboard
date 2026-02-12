import React, { useState } from 'react'
import PaymentGroup from './existing-payment-groups/PaymentGroup'
import { Plus } from 'lucide-react';
import NewPaymentGroup from './new-payment-group/NewPaymentGroup';

export const DummyData = [
    {
        id: 1,
        groupName: "Raga Pay",
        methods: [
            {
                id: 11,
                paymentMethod: "Raga Pay",
                methodDescription: "Local",
                paymentSystem: "RagaPay",
                instruction: "",
                logo: ""
            }
        ]
    },
    {
        id: 2,
        groupName: "Local Bank",
        methods: [
            {
                id: 21,
                paymentMethod: "Local Bank",
                methodDescription: "Bank",
                paymentSystem: "Bank Deposit",
                instruction: "",
                logo: ""
            }
        ]
    }
    ,
    {
        id: 3,
        groupName: "BitHide",
        methods: [
            {
                id: 31,
                paymentMethod: "BitHide",
                methodDescription: "BitHide",
                paymentSystem: "Bank Deposit",
                instruction: "",
                logo: ""
            }
        ]
    }
];

function Depositing() {
    // Adding dummy data into state so that it can be removed easily
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
                                <Plus /> <span>New Group</span>
                            </div>
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Depositing
