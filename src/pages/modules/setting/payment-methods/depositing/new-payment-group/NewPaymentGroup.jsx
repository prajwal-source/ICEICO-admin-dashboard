import React, { useState } from 'react'
import { ChevronDown, ChevronUp, CircleQuestionMark, MoveDown, MoveUp, X } from "lucide-react";
import UploadLogo from '../UploadLogo';

function NewPaymentGroup({ removeId, removeGroup }) {

    const [expandSetting, setExpandSetting] = useState(true);

    //  Controlled State
    const [groupName, setGroupName] = useState("");

    const [methods, setMethods] = useState([
        {
            id: Date.now(),
            paymentMethod: "",
            description: "",
            paymentSystem: "",
            logo: ""
        }
    ]);

    // Add new method
    const handleAddMethod = () => {
        setMethods(prev => [
            ...prev,
            {
                id: Date.now(),
                paymentMethod: "",
                description: "",
                paymentSystem: "",
                logo: ""
            }
        ]);
    };

    // Remove method
    const removeMethod = (id) => {
        setMethods(prev => prev.filter(method => method.id !== id));
    };

    // Handle method field change
    const handleMethodChange = (id, field, value) => {
        setMethods(prev =>
            prev.map(method =>
                method.id === id
                    ? { ...method, [field]: value }
                    : method
            )
        );
    };

    // Remove Group
    const handleRemoveGroup = () => {
            removeGroup(removeId);
    };

    return (
        <div className='border p-2 bg-gray-100 mb-1'>

            <div className='flex justify-center bg-white ml-3 font-bold rounded mb-3 pl-2 border w-50'>
                Payment Group
            </div>

            {/* Group Name */}
            <div className='flex justify-between items-center mb-2'>
                <div className='flex items-center'>
                    <span className='ml-50'>Group Name</span>
                    <span className='bg-gray-50 mx-2'>
                        <CircleQuestionMark size={18} color='gray' />
                    </span>

                    <input
                        type="text"
                        placeholder='Enter the name'
                        value={groupName}
                        onChange={(e) => setGroupName(e.target.value)}
                        className='border border-gray-600 w-120 pl-2 py-1 bg-white'
                    />
                </div>

                <div className='mr-10 flex gap-5'>
                    <div className='flex'>
                        <MoveDown size={23} />
                        <MoveUp size={23} />
                    </div>
                    <X size={28} color='red' onClick={handleRemoveGroup} />
                </div>
            </div>

            {/* Methods */}
            {methods.map((method) => (
                <div key={method.id} className='border bg-gray-50 border-gray-500 mt-4 mx-5 py-5'>

                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <span className='ml-37.5'>Payment Method</span>
                            <span className='bg-gray-50 mx-2'>
                                <CircleQuestionMark size={18} color='gray' />
                            </span>

                            <div className='border border-gray-600 w-120 flex justify-between bg-white'>

                                <input
                                    type="text"
                                    placeholder='Enter payment method'
                                    value={method.paymentMethod}
                                    onChange={(e) =>
                                        handleMethodChange(method.id, "paymentMethod", e.target.value)
                                    }
                                    className='w-90 pl-2 py-1'
                                />

                                <button
                                    className='bg-gray-200 p-1 pl-5 border-l w-30 flex items-center gap-2 cursor-pointer'
                                    onClick={() => setExpandSetting(!expandSetting)}
                                >
                                    Settings
                                    {expandSetting ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </button>
                            </div>
                        </div>

                        <div className='flex gap-5 mr-4.5'>
                            <div className='flex'>
                                <MoveDown size={23} />
                                <MoveUp size={23} />
                            </div>

                            <X
                                size={28}
                                color='red'
                                onClick={() => removeMethod(method.id)}
                            />
                        </div>
                    </div>

                    {/* Expanded Settings */}
                    {expandSetting && (
                        <div className='border m-5 bg-gray-100 pt-5'>

                            {/* Description */}
                            <div className='flex items-center'>
                                <span className='ml-28.5'>Method description</span>
                                <span className='bg-gray-50 mx-2'>
                                    <CircleQuestionMark size={18} color='gray' />
                                </span>

                                <input
                                    type="text"
                                    placeholder="Enter Description"
                                    value={method.description}
                                    onChange={(e) =>
                                        handleMethodChange(method.id, "description", e.target.value)
                                    }
                                    className='border border-gray-600 w-120 pl-2 py-1 bg-white'
                                />
                            </div>

                            {/* Payment System */}
                            <div className='flex items-center mt-6'>
                                <span className='ml-34.5'>Payment system</span>
                                <span className='bg-gray-50 mx-2'>
                                    <CircleQuestionMark size={18} color='gray' />
                                </span>

                                <input
                                    type="text"
                                    placeholder="Select payment system"
                                    value={method.paymentSystem}
                                    onChange={(e) =>
                                        handleMethodChange(method.id, "paymentSystem", e.target.value)
                                    }
                                    className='border border-gray-600 px-4 py-1 bg-white'
                                />
                            </div>

                            {/* Upload Logo */}
                            <div className='ml-34 mt-4'>
                                <UploadLogo />
                            </div>

                        </div>
                    )}
                </div>
            ))}

            {/* Add Method Button */}
            <div className='flex justify-center'>
                <button
                    className='cursor-pointer rounded my-8 py-1 bg-gray-200 border border-gray-500 w-40'
                    onClick={handleAddMethod}
                >
                    Add Method
                </button>
            </div>
            <button className='border bg-gray-500'
                onClick={() => {
                    console.log({
                        groupName,
                        methods
                    });
                }}
            >
                Print Form Data
            </button>


        </div>
    );
}

export default NewPaymentGroup;
