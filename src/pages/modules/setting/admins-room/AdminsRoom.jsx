import { useForm } from 'react-hook-form';
import Breadcrumb from '../../../../components/uiComponents/BreadCrumb';

function AdminsRoom() {
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
                    { label: "Admin's Room" } // last one → inactive
                ]}
            />
            {/* Main Box */}
            <div className="bg-white shadow-md rounded border px-4 py-3">
                {/* Title + Create User */}
                <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
                        Admin's Room
                    </h2>
                </div>
                <div className="bg-gray-100 border rounded p-3 sm:p-0 mb-4">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 p-4  rounded w-full text-sm max-w-3xl mx-auto"
                    >
                        {/* Recipient */}
                        <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-4 items-center">
                            <label className="break-words">Recipient :</label>

                            <select
                                name="recipient"
                                className="border w-full min-w-0 px-3 py-2 rounded bg-white"
                            >
                                <option>All</option>
                                <option>Admins</option>
                                <option>Clients</option>
                            </select>
                        </div>
                        {/* Template */}
                        <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-4 items-center">
                            <label>Template :</label>
                            <select
                                name="template"
                                className="border w-full px-3 py-2 rounded bg-white"
                            >
                                <option>Dummy-1</option>
                                <option>Dummy-2</option>
                                <option>Dummy-3</option>
                            </select>
                        </div>
                        {/* Send letters */}
                        <label className="flex items-center lg:ml-8 sm:ml-2  gap-2 sm:gap-4 cursor-pointer ">
                            <span>Send letters :</span>
                             
                            <input
                                type="checkbox"
                                name="sendLetters"
                                className="peer hidden"
                            />
                             <span className="w-4 lg:ml-8 sm:ml-1 h-4 border bg-white border-gray-400 rounded-sm flex items-center justify-center peer-checked:after:content-['✔'] peer-checked:after:text-black peer-checked:after:text-xs" />
                           
                        </label>


                        {/* Language */}
                        <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-4 items-center">
                            <label>Language :</label>
                            <select
                                name="language"
                                className="border w-full px-3 py-2 rounded bg-white"
                            >
                                <option>English</option>
                            </select>
                        </div>
                        {/* Subject */}
                        <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-4 items-center">
                            <label>Subject :</label>
                            <input
                                name="subject"
                                className="border w-full px-3 py-2 rounded bg-white"
                                placeholder="Enter email subject"
                            />
                        </div>
                        {/* Text */}
                        <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-4">
                            <label className="pt-2">Text :</label>
                            <textarea
                                rows={8}
                                onChange={(e) => setText(e.target.value)}
                                className="border w-full p-3 rounded bg-white"
                                placeholder="Write your email content here..."
                            />
                        </div>
                        {/* Buttons */}
                        <div className="flex flex-col lg:ml-10 sm:ml-2  sm:flex-row justify-center gap-6 pt-6">
                            <button
                                type="button"
                                className="border px-6 py-2 rounded bg-gray-200 hover:bg-gray-300"
                                onClick={() => navigate("/service/exchange-rates")}
                            >
                                Test
                            </button>
                            <button
                                type="submit"
                                className="border px-6 py-2 rounded bg-gray-200 hover:bg-gray-300"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminsRoom;