import { CircleQuestionMark } from "lucide-react";
import { useRef } from "react";

function InstructionEditor() {
  const editorRef = useRef(null);

  //  Keep editor focused while formatting
  const formatText = (command) => {
    editorRef.current.focus();
    document.execCommand(command, false, null);
  };

  //  Convert editor content to HTML
  const getInstructionsHtml = () => {
    const html = editorRef.current.innerHTML;
    console.log("HTML CONTENT:", html);
    return html;
  };

  /*
    Example usage later:
    const html = getInstructionsHtml();
    send html to backend or save in DB
  */

  return (
    <div className="flex bg-[#f5f3ee] p-6">
      
      {/* Label */}
      <div className="flex gap-1 mt-2">
        <span className="ml-px">Instructions</span>
        <span className="mt-0.5 mx-2 text-gray-500">
          <CircleQuestionMark size={18} />
        </span>
      </div>

      {/* Editor Box */}
      <div className="border border-gray-500 w-122 bg-white">

        {/* Toolbar */}
        <div className="flex items-center gap-5 border-b border-gray-500 p-2 bg-gray-50">
          <button onClick={() => formatText("bold")} className="font-bold">B</button>
          <button onClick={() => formatText("italic")} className="italic">I</button>
          <button onClick={() => formatText("underline")} className="underline">U</button>
          <button onClick={() => formatText("strikeThrough")} className="line-through">S</button>

          <button onClick={() => formatText("insertUnorderedList")}>• List</button>
          <button onClick={() => formatText("insertOrderedList")}>1. List</button>

          <button onClick={() => formatText("justifyLeft")}>⇤</button>
          <button onClick={() => formatText("justifyCenter")}>⇔</button>
          <button onClick={() => formatText("justifyRight")}>⇥</button>

          <button onClick={() => formatText("insertHorizontalRule")}>―</button>
        </div>

        {/* Editable Area */}
        <div
          ref={editorRef}
          contentEditable
          className="min-h-[300px] p-4 outline-none"
          suppressContentEditableWarning
        >
          <p>A/C Name - P SUBBU LAKSHMI </p>
          <p></p>
          <p>A/C - 62062200057351 </p>
          <p></p>
          <p>IFSC - CNRB0016206 </p>
          <p></p>
          <p>CANARA BANK</p>
        </div>
      </div>
    </div>
  );
}

export default InstructionEditor;
