import { ChevronDown, ChevronUp, CircleQuestionMark, MoveDown, MoveUp, X } from 'lucide-react'
import React, { useState } from 'react'
import InstructionEditor from './InstructionEditor'
import UploadLogo from '../UploadLogo'

function ExistingPaymentMethod({ method, onChange, removeExistingPaymentMethod }) {
    console.log(method);
    
    const [expandSetting, setExpandSetting] = useState(false);

    return (
        <div className='border bg-gray-50 border-gray-500 mt-4 mx-5 py-5 '>

            <div className='flex items-center justify-between group'>
                <div className='flex items-center'>
                    <span className='ml-37.5'>Payment Method</span>
                    <span className='bg-gray-50 mx-2'>
                        <CircleQuestionMark size={18} color='gray' />
                    </span>

                    <div className='border border-gray-600 w-120 flex justify-between bg-white'>

                        <input
                            type="text"
                            placeholder='Enter payment method'
                            defaultValue={method.paymentMethod}
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

                <div className='flex gap-5 mr-4.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                    <div className='flex'>
                        <MoveUp size={23} />
                        <MoveDown size={23} />
                    </div>

                    <X
                        size={28}
                        color='red'
                        onClick={() => removeExistingPaymentMethod(method.id)}
                    />
                </div>
            </div>

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
                            placeholder='Enter Description'
                            onChange={(e) =>
                                onChange(method.id, "description", e.target.value)
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
                         <button className='border border-gray-600 px-4 py-1 bg-gray-200 '>
                             {method.paymentSystem}
                         </button>
                    
                    </div>
                    {/* Upload Logo */}
                    <div className='ml-34 mt-4'>
                        <UploadLogo />
                    </div>

                </div>
            )}

        </div>
    );
}

export default ExistingPaymentMethod;
