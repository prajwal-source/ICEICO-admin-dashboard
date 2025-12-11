import React, { useState } from 'react'
import { MdFeedback, MdPerson, MdLogout } from "react-icons/md";
import HoverDropDown from './HoverDropDown';
import FeedbackModal from '../feedback/FeedbackModel';
import { useNavigate } from 'react-router';

function TopNaviagtionBar() {
    const navigate=useNavigate();
    const [openFeedback, setOpenFeedback] = useState(false);
    const handleMyProfile = () => navigate('/');
    const handleLogOut = () => navigate('/');
    const handleRating = (value) => console.log("User selected rating:", value);
    
  return (
   <div className="bg-gray-300 shadow-sm border rounded mb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between px-3 py-2 gap-3">

                    {/* Left Section */}
                    <div className="flex items-center justify-between md:gap-6">
                        <div className="text-xl font-bold">LOGO</div>

                        <div className="hidden md:flex gap-4">
                            <HoverDropDown
                                    label="Settings"
                                    items={[
                                        { name: "Documents", onClick: () => navigate('/exchange-rates') },
                                        { name: "Admins Room", onClick: () => navigate('/emails') },
                                        { name: "Payment Systems", onClick: () => navigate('/promotions') },
                                        { name: "Servers", onClick: () => navigate('/users') },
                                        { name: "Account Types", onClick: () => navigate('/ala-report') },
                                        { name: "Language", onClick: () => navigate('/ala-report') },
                                        { name: "Payment Methods", onClick: () => navigate('/ala-report') },
                                        { name: "Login Confirmation", onClick: () => navigate('/ala-report') },
                                        
                                    ]}
                                />
                           
                                <HoverDropDown
                                    label="Service"
                                    items={[
                                        { name: "Exchange rates", onClick: () => navigate('/service/exchange-rates') },
                                        { name: "Email templates", onClick: () => navigate('/service/email_templates') },
                                        { name: "Promotions", onClick: () => navigate('/service/promotions') },
                                        { name: "Users management", onClick: () => navigate('/service/user_manage') },
                                        { name: "ALA report", onClick: () => navigate('service/active_accounts_report') },
                                    ]}
                                />

                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-3 md:gap-5">
                        <button
                            className="cursor-pointer text-sm flex items-center gap-1 px-3 py-1 hover:bg-gray-400 rounded"
                            onClick={() => setOpenFeedback(true)}
                        >
                            <MdFeedback size={20} className='mt-1' /> Feedback
                        </button>

                        <FeedbackModal
                            open={openFeedback}
                            onClose={() => setOpenFeedback(false)}
                            onSelect={handleRating}
                        />

                        <button
                            className="cursor-pointer text-sm flex items-center gap-1 px-3 py-1 hover:bg-gray-400 rounded"
                            onClick={handleMyProfile}
                        >
                            <MdPerson size={20} /> My Profile
                        </button>

                        <button
                            className="cursor-pointer text-sm p-2 hover:bg-gray-400 rounded"
                            onClick={handleLogOut}
                        >
                            <MdLogout size={20} />
                        </button>
                    </div>
                </div>
            </div>

  )
}

export default TopNaviagtionBar;