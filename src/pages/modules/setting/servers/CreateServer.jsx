import { useForm } from 'react-hook-form';
import { MdHelpOutline } from 'react-icons/md';
import Breadcrumb from '../../../../components/uiComponents/BreadCrumb';
import { useNavigate } from 'react-router';

function CreateServer() {
    const navigate=useNavigate();

    const { register, setValue, handleSubmit } = useForm({
        defaultValues: {
            recipient: "All",
            template: "",
            sendLetters: true,
            language: "English",
            subject: "",
            text: "",
        },
    });

    const onSubmit = (data) => {
        console.log("Template Saved:", data);
    };

    return (
        <div className="min-h-screen p-2 md:p-0">

            {/* Breadcrumb */}
            <Breadcrumb
                items={[
                    { label: "Homepage", onClick: () => navigate("/service/user_manage") },
                    { label: "Settings" },
                    { label: "Servers", onClick:()=>navigate("/settings/servers_manage") },
                    { label: "Create Server" } // last one → inactive
                ]}
            />
            {/* Main Box */}
            <div className="bg-white shadow-md rounded border px-4 py-3">

                {/* Title + Create User */}
                <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
                        Email Templates
                    </h2>
                </div>
                <div className="bg-gray-100 border rounded p-3 sm:p-0 mb-4">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 p-4  rounded w-full text-sm max-w-3xl mx-auto"
                    >
                        {/* Name */}
                        <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-4 items-center">
                            <label>Name :</label>
                            <input
                                name="subject"
                                className="border w-full px-3 py-2 rounded bg-white"
                          
                            />
                        </div>
                        {/* Subject */}
                        <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-4 items-center">
                            <label>API Url :</label>
                            <input
                                name="API Url"
                                className="border w-full px-3 py-2 rounded bg-white"
                              
                            />
                        </div>
                        {/* Webhook IP */}
                        <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-4 items-center">
                            <label>Webhook IP :</label>
                            <input
                                name="subject"
                                className="border w-full px-3 py-2 rounded bg-white"
                          
                            />
                        </div>
                        {/* Private Token */}
                        <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-4 items-center">
                            <label>Private Token :</label>
                            <input
                                name="subject"
                                className="border w-full px-3 py-2 rounded bg-white"
                                
                            />
                        </div>
                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                            <button
                                type="submit"
                                className="border px-6 py-2 rounded bg-gray-200 hover:bg-gray-300"
                            >
                               Create
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default CreateServer;