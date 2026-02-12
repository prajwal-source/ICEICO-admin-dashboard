import React, { useState } from 'react'
import { ChevronDown, ChevronUp, CircleQuestionMark, MoveDown, MoveUp, X } from "lucide-react";
import UploadLogo from '../UploadLogo';
import InstructionEditor from './InstructionEditor';
import AddMethod from '../AddMethod';
import ExistingPaymentMethod from './ExistingPaymentMethod';

function PaymentGroup({ Data, removeExistingGroup }) {
    const [showTooltip, setShowTooltip] = useState(false);
    const [addMethod, setAddMethod] = useState([]);
    const [methods, setMethods] = useState(Data.methods);
    //Dynamic component rendering
    const handleAddMethod = () => {
        setAddMethod([...addMethod, { id: Date.now() }])
    }
    const handleMethodChange = (id, field, value) => {
        setMethods(prev =>
            prev.map(method =>
                method.id === id ? { ...method, [field]: value } : method
            )
        );
    };
    // remove Payment Method
    const removeExistingPaymentMethod = (id) => {
        const isConfirmed = window.confirm("Are you sure you want to remove this Group?");

        if (isConfirmed) {
            setMethods(prev => prev.filter(method => method.id !== id));
        }
    };

    // remove method 
    const removeMethod = (id) => {
        setAddMethod(addMethod.filter((method) => method.id !== id));
    };
    return (
        <>
            <div className='border p-2 bg-gray-100 mb-1 group'>
                {/* heading inside box */}
                <div className='flex justify-center bg-white ml-3 font-bold rounded mb-3 pl-2 border w-50'>Payment Group</div>
                <div className='flex justify-between items-center mb-2'>
                    {/* Group Name and Box of Group name */}
                    <div className='flex items-center'>
                        <span className='ml-50'>Group Name</span>
                        <div className="relative inline-block mx-2">
                            <span className="peer cursor-pointer bg-gray-50 inline-block">
                                <CircleQuestionMark size={18} color="gray" />
                            </span>
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 ml-35 mb-2 opacity-0 peer-hover:opacity-100 transition-opacity duration-200 bg-black/80 text-white  px-2 py-1 rounded shadow-lg z-50 whitespace-nowrap text-left">
                                A group admin combine several payment
                                <br />
                                methods in the Traders Room
                            </div>
                        </div>
                        <div className='border border-gray-600 w-120 flex pl-2 py-1 bg-white'>{Data.groupName}</div>
                    </div>
                    {/* Arrows and Cross Symbol */}
                    <div className='mr-10 flex gap-5'>
                        <div className='flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                            <MoveUp size={23} />
                            <MoveDown size={23} />
                        </div>
                        <X size={28} color='red' onClick={() => removeExistingGroup(Data.id)} />
                    </div>
                </div>
                {/* Payment Methods */}
                {methods.map(method => (
                    <ExistingPaymentMethod
                        key={method.id}
                        method={method}
                        onChange={handleMethodChange}
                        removeExistingPaymentMethod={removeExistingPaymentMethod}
                    />
                ))}
                {/* Add payment method */}
                    {addMethod.map(method => (
                        <AddMethod
                            key={method.id}
                            id={method.id}
                            removeMethod={removeMethod}
                        />
                    ))}
                <div className='flex justify-center ' >
                    <button className='cursor-pointer rounded my-8 py-1 bg-gray-200 border border-gray-500 w-40'
                        onClick={handleAddMethod}>
                        Add Method
                    </button>
                </div>
            </div>
        </>
    )
}

export default PaymentGroup;