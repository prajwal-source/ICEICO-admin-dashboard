import React, { useState } from 'react'
import InstructionEditor from './existing-payment-groups/InstructionEditor'
import UploadLogo from './UploadLogo'
import { ChevronDown, ChevronUp, CircleQuestionMark, MoveDown, MoveUp, X } from 'lucide-react'

function AddMethod({ id, removeMethod }) {
    const [expandSetting, setExpandSetting] = useState(true);
    const handleRemoveMethod = () => {
        const isConfirmed = window.confirm("Are you sure you want to remove this method?");

        if (isConfirmed) {
            removeMethod(id)
        }
    }
    return (
        <>

            {/* Payment Methods */}
            <div className=' border bg-gray-50 border-gray-500 mt-4 mx-5 py-5 group'>
                <div className='flex items-center justify-between '>
                    <div className='flex items-center'>

                        <span className='ml-37.5'>Payment Method</span>
                        <span className='bg-gray-50 mx-2'><CircleQuestionMark size={18} color='gray' /></span>
                        <div className='border border-gray-600 w-120 flex justify-between bg-white'>

                            <input
                                type="text"
                                placeholder='Enter payment method'
                                
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

                    {/* Arrows and Cross Symbol */}
                    <div className=' flex gap-5 mr-4.5 opacity-0 group-hover:opacity-100 '>
                        <div className='flex'>
                            <MoveUp size={23} />
                            <MoveDown size={23} />
                            </div>
                        {/* Remove method */}
                        <X size={28} color='red' onClick={handleRemoveMethod} />
                    </div>

                </div>

                {/* Box after setting click */}
                {expandSetting &&
                    <div className='border m-5 bg-gray-100 pt-5 '>
                        {/* Method description */}
                        <div className='flex items-center'>
                            <span className='ml-28.5'>Method description</span>
                            <span className='bg-gray-50 mx-2'><CircleQuestionMark size={18} color='gray' /></span>
                            <input className='border border-gray-600 w-120 flex pl-2 py-1 bg-white' type='text' placeholder="Enter Description" />
                        </div>
                        {/* Payment system */}
                        <div className='flex items-center mt-6'>
                            <span className='ml-34.5'>Payment system</span>
                            <span className='bg-gray-50 mx-2'><CircleQuestionMark size={18} color='gray' /></span>
                            <div className='border  bg-gray-200 border-gray-600 flex px-12 py-0.5 '>Select</div>
                        </div>
                        {/* Instructions */}

                        {/* Upload logo */}
                        <div className='ml-34'>
                            <UploadLogo />
                        </div>
                        {/* Logo */}
                        <div></div>
                    </div>
                }

            </div>
        </>
    )
}

export default AddMethod
