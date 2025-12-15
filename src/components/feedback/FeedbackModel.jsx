import { useState } from "react";
import {
    RiEmotionUnhappyLine,
    RiEmotionSadLine,
    RiEmotionNormalLine,
    RiEmotionHappyLine,
    RiEmotionLaughLine,
} from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const ratings = [
    { id: 1, icon: <RiEmotionUnhappyLine className="w-10 h-10" />, hover: "hover:bg-red-500" },
    { id: 2, icon: <RiEmotionSadLine className="w-10 h-10" />, hover: "hover:bg-red-400" },
    { id: 3, icon: <RiEmotionNormalLine className="w-10 h-10" />, hover: "hover:bg-orange-300" },
    { id: 4, icon: <RiEmotionHappyLine className="w-10 h-10" />, hover: "hover:bg-green-300" },
    { id: 5, icon: <RiEmotionLaughLine className="w-10 h-10" />, hover: "hover:bg-green-500" },
];

const FeedbackModal = ({ open, onClose, onSelect }) => {
    const [selected, setSelected] = useState(null);
    const [isActive, setIsActive] = useState(false);
    const [comment, setComment] = useState("");
    const [screenshot, setScreenshot] = useState(null);
    if (!open) return null;

    const handleSend = () => {
        const feedback = {
            rating: selected,
            comment,
            screenshot,
        };

        console.log("Feedback submitted:", feedback);

        onClose();  // close modal
    };
    const handleSelect = (value) => {
        setSelected(value);
        setIsActive(true);    // show form
        onSelect(value); // send rating to parent (optional)
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
            {/* Popup Box */}
            <div className="bg-white w-[420px] rounded-lg shadow-xl p-6 relative animate-fadeIn">
                {/* Close Button */}
                <button onClick={onClose} className="absolute right-4 top-4">
                    <IoClose className="w-6 h-6 text-gray-500 hover:text-gray-700" />
                </button>
                {/* Title */}
                <h2 className="text-xl font-semibold mb-2">Feedback</h2>
                <p className="text-gray-600 mb-4">
                    How would you rate your experience with the app?
                </p>
                {/* Rating Icons */}
                <div className="flex justify-between mt-4">
                    {ratings.map((rate) => (
                        <button
                            key={rate.id}
                            onClick={() => { handleSelect(rate.id); setIsActive(true) }}
                            className={`flex items-center justify-center w-16 h-16 rounded-full border transition
                            ${rate.hover}
                            ${selected === rate.id ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
                        >
                            {rate.icon}
                        </button>
                    ))}
                </div>
                <div>
                    {isActive && (
                        <div className="mt-6">
                            {/* Question */}
                            <p className="text-gray-700 mb-2">
                                Are you facing any kind of difficulty? Please let us know.
                            </p>
                            {/* Comment Box */}
                            <textarea
                                rows="4"
                                placeholder="Your comment"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            ></textarea>
                            {/* Screenshot upload */}
                            <div className="mt-3 flex items-center gap-2 cursor-pointer">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="file"
                                        className="hidden"
                                        onChange={(e) => setScreenshot(e.target.files[0])}
                                    />
                                    <span className="border-2 p-2 text-sm flex items-center gap-1 hover:bg-gray-200">
                                        📎 Add a screenshot
                                    </span>
                                </label>
                                {screenshot && (
                                    <span className="text-xs text-green-600">
                                        {screenshot.name}
                                    </span>
                                )}
                            </div>
                            {/* Buttons */}
                            <div className="flex justify-end gap-3 mt-5">
                                <button
                                    onClick={onClose}
                                    className="px-5 py-2 rounded border bg-gray-200 hover:bg-gray-300"
                                >
                                    Cancel
                                </button>

                                <button
                                    disabled={!comment}
                                    onClick={handleSend}
                                    className={`px-5 py-2 rounded text-white 
                                       ${comment ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-300 cursor-not-allowed"}`}
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FeedbackModal;
