import { useState } from "react";
import { MdMenu, MdClose, MdLogout, MdPerson, MdFeedback } from "react-icons/md";
import HoverDropDown from "./HoverDropDown";
import { useNavigate } from "react-router";
import FeedbackModal from "../feedback/FeedbackModel";

function TopNavbar() {
    const navigate = useNavigate();
    const [openMenu, setOpenMenu] = useState(false);
    const [openFeedback, setOpenFeedback] = useState(false); 
    // Close menu on mobile navigation
    const handleMobileNavigate = (path) => {
        navigate(path);
        setOpenMenu(false);
    };

    return (
        <div className="bg-gray-300 shadow-sm border rounded mb-4">
            <div className="flex items-center justify-between px-3 py-2">

                {/* LEFT SIDE */}
                <div className="flex items-center gap-6">
                    <div className="text-lg font-bold">LOGO</div>

                    {/* Desktop Menus */}
                    <div className="hidden md:flex items-center gap-6">
                        <HoverDropDown
                            label="Settings"
                            items={[
                                { name: "Documents", onClick: () => navigate("/settings/documents_manage") },
                                { name: "Admins Room", onClick: () => navigate("/settings/settings") },
                                { name: "Payment Systems", onClick: () => navigate("/settings/merchants_manage") },
                                { name: "Servers", onClick: () => navigate("/settings/servers_manage") },
                                { name: "Account Types", onClick: () => navigate("/settings/types") },
                                { name: "Language", onClick: () => navigate("/settings/languages_manage") },
                                { name: "Payment Methods", onClick: () => navigate("/settings/payment_methods") },
                                { name: "Login Confirmation", onClick: () => navigate("/settings/authentication_settings") },
                            ]}
                        />
                        <HoverDropDown
                            label="Service"
                            items={[
                                { name: "Exchange rates", onClick: () => navigate("/service/exchange-rates") },
                                { name: "Email templates", onClick: () => navigate("/service/email_templates") },
                                { name: "Promotions", onClick: () => navigate("/service/promotions") },
                                { name: "Users management", onClick: () => navigate("/service/user_manage") },
                                { name: "ALA report", onClick: () => navigate("/service/active_accounts_report") },
                            ]}
                        />
                    </div>
                </div>
                {/* RIGHT SIDE */}
                <div className="flex items-center gap-4">
                    {/* Desktop Icons */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            className="flex items-center gap-1 px-3 py-1 hover:bg-gray-400 rounded"
                            onClick={() => setOpenFeedback(true)}
                        >
                            <MdFeedback size={18} /> Feedback
                        </button>
                        <FeedbackModal
                            open={openFeedback}
                            onClose={() => setOpenFeedback(false)}
                            onSelect={(rating) => console.log("Rating:", rating)}
                        />
                        <button
                            className="flex items-center gap-1 px-3 py-1 hover:bg-gray-400 rounded"
                            onClick={() => navigate("/profile")}
                        >
                            <MdPerson size={18} /> My Profile
                        </button>
                        <button
                            className="p-2 hover:bg-gray-400 rounded"
                            onClick={() => navigate("/")}
                        >
                            <MdLogout size={18} />
                        </button>
                    </div>
                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setOpenMenu(!openMenu)}
                    >
                        {openMenu ? <MdClose size={26} /> : <MdMenu size={26} />}
                    </button>
                </div>
            </div>
            {/* MOBILE MENU */}
            {openMenu && (
                <div
                    className="fixed inset-0 z-40 md:hidden bg-black/10 "
                    onClick={() => setOpenMenu(false)}
                >
                    <div
                        className=" bg-gray-200 border px-5 py-5 space-y-5  shadow-2xl rounded-b-xl animate-slideDow "
                        onClick={(e) => e.stopPropagation()}
                    >
                        <MobileSection title="Settings">
                            <MobileItem label="Documents" onClick={() => handleMobileNavigate("/settings/documents_manage")} />
                            <MobileItem label="Admins Room" onClick={() => handleMobileNavigate("/settings/settings")} />
                            <MobileItem label="Payment Systems" onClick={() => handleMobileNavigate("/settings/merchants_manage")} />
                            <MobileItem label="Servers" onClick={() => handleMobileNavigate("/settings/servers_manage")} />
                            <MobileItem label="Account Types" onClick={() => handleMobileNavigate("/settings/types")} />
                            <MobileItem label="Language" onClick={() => handleMobileNavigate("/settings/languages_manage")} />
                            <MobileItem label="Payment Methods" onClick={() => handleMobileNavigate("/settings/payment_methods")} />
                            <MobileItem label="Login Confirmation" onClick={() => handleMobileNavigate("/settings/authentication_settings")} />
                        </MobileSection>

                        <MobileSection title="Service">
                            <MobileItem label="Exchange rates" onClick={() => handleMobileNavigate("/service/exchange-rates")} />
                            <MobileItem label="Email templates" onClick={() => handleMobileNavigate("/service/email_templates")} />
                            <MobileItem label="Promotions" onClick={() => handleMobileNavigate("/service/promotions")} />
                            <MobileItem label="Users management" onClick={() => handleMobileNavigate("/service/user_manage")} />
                            <MobileItem label="ALA report" onClick={() => handleMobileNavigate("/service/active_accounts_report")} />
                        </MobileSection>

                        <div className="border-t pt-4 flex justify-between">
                            <button
                                className="flex items-center gap-1 px-3 py-2 rounded-md hover:bg-gray-300 transition"
                                onClick={() => {
                                    setOpenFeedback(true);
                                    setOpenMenu(false);
                                }}
                            >
                                <MdFeedback size={18} /> Feedback
                            </button>

                            <button
                                className="flex items-center gap-1 px-3 py-2 rounded-md hover:bg-gray-300 transition"
                                onClick={() => handleMobileNavigate("/profile")}
                            >
                                <MdPerson size={18} /> Profile
                            </button>

                            <button
                                className="flex items-center gap-1 px-3 py-2 rounded-md hover:bg-red-100 text-red-600 transition"
                                onClick={() => handleMobileNavigate("/")}
                            >
                                <MdLogout size={18} /> Logout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
/* ---------- Mobile Helpers ---------- */
const MobileSection = ({ title, children }) => (
    <div>
        <div className="font-semibold mb-2 border-b">{title}</div>
        <div className="space-y-2">{children}</div>
    </div>
);
const MobileItem = ({ label, onClick }) => (
    <button
        onClick={onClick}
        className="block w-full text-left px-2 py-1 rounded hover:bg-gray-300"
    >
        {label}
    </button>
);

export default TopNavbar;
