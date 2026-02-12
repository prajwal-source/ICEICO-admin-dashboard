import { useRef, useState } from "react";

function UploadLogo() {
  const fileRef = useRef(null);
  const [logo, setLogo] = useState(null);
  const [fileName, setFileName] = useState("No file chosen");

  const handleClick = () => {
    fileRef.current.click();
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type !== "image/png") {
      alert("Only PNG files are allowed");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("File size must not exceed 10MB");
      return;
    }

    setFileName(file.name);
    setLogo(URL.createObjectURL(file));
  };

  return (
    <div className="p-6 rounded-md w-2xl">

      {/* Upload Row */}
      <div className="flex items-center gap-9">
        <label className="w-28">Upload logo</label>

        <div
          onClick={handleClick}
          className="flex items-center  gap-3 border border-gray-400 bg-white px-3 py-1 cursor-pointer w-full"
        >
          <span className="bg-gray-200 border border-gray-400 px-3  font-medium">
            Choose File
          </span>
          <span className="truncate">{fileName}</span>
        </div>

        <input
          ref={fileRef}
          type="file"
          accept="image/png"
          onChange={handleChange}
          className="hidden"
        />
      </div>

      {/* Helper text */}
      <p className="text-sm italic text-gray-500 mt-2 ml-25">
        Supported files type: png. The file must not exceed 10 MB.
        The logo size should not exceed 124×32 pixels.
      </p>

      {/* Logo Preview */}
      <div className="flex items-center gap-6 ml-12 mt-6">
        <span className="mr-5">Logo</span>

        <div className="w-25 h-10 flex items-center justify-center border border-dashed border-gray-400 bg-white">
          {logo ? (
            <img
              src={logo}
              alt="Logo Preview"
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <span className="text-green-600 text-xl">💵</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default UploadLogo;
