import { useState } from "react";
import { MdMenu, MdClose, MdLogout, MdPerson, MdFeedback } from "react-icons/md";
import HoverDropDown from "./HoverDropDown";
import { useNavigate } from "react-router";
import FeedbackModal from "../feedback/FeedbackModel";

function TopNavbar() {
    const navigate = useNavigate();
    const [openMenu, setOpenMenu] = useState(false);
    const [openFeedback, setOpenFeedback] = useState(false);

    return (
        <div className="bg-gray-300 shadow-sm border rounded mb-4">
            <div className="flex items-center justify-between px-3 py-2">
                {/* LEFT SIDE: Logo + Menus */}
                <div className="flex items-center gap-6">
                    {/* Logo */}
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

                {/* RIGHT SIDE: Actions */}
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
                            onSelect={(rating) => {
                                console.log("Selected rating:", rating);
                            }}
                        />

                        <button className="flex items-center gap-1 px-3 py-1 hover:bg-gray-400 rounded">
                            <MdPerson size={18} /> My Profile
                        </button>

                        <button className="p-2 hover:bg-gray-400 rounded">
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
                <div className="md:hidden border-t bg-gray-200 px-4 py-3 space-y-4">

                    <MobileSection title="Settings">
                        <MobileItem label="Documents" onClick={() => navigate("/settings/documents_manage")} />
                        <MobileItem label="Admins Room" onClick={() => navigate("/settings/settings")} />
                        <MobileItem label="Payment Systems" onClick={() => navigate("/settings/merchants_manage")} />
                        <MobileItem label="Servers" onClick={() => navigate("/settings/servers_manage")} />
                        <MobileItem label="Account Types" onClick={() => navigate("/settings/types")} />
                        <MobileItem label="Language" onClick={() => navigate("/settings/languages_manage")} />
                        <MobileItem label="Payment Methods" onClick={() => navigate("/settings/payment_methods")} />
                        <MobileItem label="Login Confirmation" onClick={() => navigate("/settings/authentication_settings")} />
                    </MobileSection>

                    <MobileSection title="Service">
                        <MobileItem label="Exchange rates" onClick={() => navigate("/service/exchange-rates")} />
                        <MobileItem label="Email templates" onClick={() => navigate("/service/email_templates")} />
                        <MobileItem label="Promotions" onClick={() => navigate("/service/promotions")} />
                        <MobileItem label="Users management" onClick={() => navigate("/service/user_manage")} />
                        <MobileItem label="ALA report" onClick={() => navigate("/service/active_accounts_report")} />
                    </MobileSection>

                    <div className="border-t pt-3 flex gap-4">

                        <button
                            className="flex items-center gap-1 px-3 py-1 hover:bg-gray-400 rounded"
                            onClick={() => setOpenFeedback(true)}
                        >
                            <MdFeedback size={18} /> Feedback
                        </button>

                        <FeedbackModal
                            open={openFeedback}
                            onClose={() => setOpenFeedback(false)}
                            onSelect={(rating) => {
                                console.log("Selected rating:", rating);
                            }}
                        />
                        
                        <button className="flex items-center gap-1">
                            <MdPerson size={18} /> Profile
                        </button>
                        <button className="flex items-center gap-1">
                            <MdLogout size={18} /> Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

/* ---------- Mobile Helpers ---------- */

const MobileSection = ({ title, children }) => (
    <div>
        <div className="font-semibold mb-2 border">{title}</div>
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
