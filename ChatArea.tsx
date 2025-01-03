"use client";

import { useState } from "react";
import { FiPaperclip, FiArrowUp } from "react-icons/fi";

const CenteredInput = () => {
  const [input, setInput] = useState<string>("");

  //  file
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) alert(`Selected file: ${file.name}`);
  };

  //  search action
  const handleSearch = () => {
    if (input.trim()) {
      alert(`Searching for: ${input}`);
      setInput(""); // Clear input
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100 overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col items-center w-full px-4">
        {/* Title */}
        <h1 className="text-2xl font-semibold mb-4">Can I Help You?</h1>

        {/* Input Bar */}
        <div className="relative w-full max-w-3xl">
          {/* Textarea  */}
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type here..."
            spellCheck={true} //  spell check
            className="w-full p-4 pr-16 pl-12 border border-gray-300 rounded-lg focus:outline-none resize-none overflow-y-auto"
            rows={4}
            style={{
              maxHeight: "5rem", //  height
              overflowX: "hidden", //  scrolling
            }}
          />

          {/* Attach File Icon */}
          <label className="absolute left-3 bottom-2 text-gray-500 cursor-pointer">
            <FiPaperclip size={24} />
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          {/* Up Arrow Button */}
          <button
            onClick={handleSearch}
            className="absolute right-2 bottom-3 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
          >
            <FiArrowUp size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CenteredInput;
