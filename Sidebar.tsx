"use client"; // Ensures this is a Client Component

import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMessageSquareAdd } from "react-icons/bi";
import { FaRobot } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import { FaBars } from "react-icons/fa"; // Hamburger icon

// Prop types
type SidebarProps = {
  onToggleChat: (title: string) => void;
};

const Sidebar = ({ onToggleChat }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [history, setHistory] = useState([
    { id: 2, title: "Today's Chat" },
    { id: 3, title: "Yesterday's Chat" },
    { id: 4, title: "Last 7 Days" },
  ]);
  const [showMenu, setShowMenu] = useState<number | null>(null); // Track which history item has the menu

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  const handleAction = (action: string, id: number) => {
    if (action === "delete") {
      setHistory((prev) => prev.filter((item) => item.id !== id));
    }
    if (action === "rename") {
      const newTitle = prompt("Enter a new title:");
      if (newTitle) {
        setHistory((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, title: newTitle } : item
          )
        );
      }
    }
    setShowMenu(null); // Close after action
  };

  return (
    <div className="relative flex flex-col h-[100vh]">
      {/* Hamburger Icon at the top-right corner */}
      <div className="absolute top-4 right-4 z-50">
        <FaBars
          size={30}
          className="cursor-pointer text-white"
          onClick={toggleSidebar}
        />
      </div>

      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white h-full ${isOpen ? "w-[300px]" : "w-16"} transition-all duration-300 ease-in-out flex flex-col justify-between`}
      >
        {/* New Chat Icon */}
        <div
          className="absolute top-16 left-4 flex items-center p-2 gap-2 cursor-pointer hover:bg-gray-700"
          onClick={() => alert("Start a new chat")}
        >
          <BiMessageSquareAdd size={24} />
          {isOpen && <span>New Chat</span>}
        </div>

        {/* Search Icon */}
        <div
          className="absolute top-24 left-4 flex items-center p-2 gap-2  mt-2 cursor-pointer hover:bg-gray-700"
          onClick={() => alert("Search clicked")}
        >
          <AiOutlineSearch size={24} />
          {isOpen && <span>Search</span>}
        </div>

        {/* Sidebar History */}
        <div className="mt-40 p-2 flex-1">
          <h3 className={`${isOpen ? "block" : "hidden"} text-sm font-bold`}>
            History
          </h3>
          {history.map((item, index) => (
            <div
              key={item.id}
              className={`flex items-center justify-between p-2 hover:bg-gray-700 ${
                index > 0 ? "mt-4" : ""
              }`}
            >
              <div
                className="flex items-center gap-2 cursor-pointer w-full overflow-hidden"
                onClick={() => onToggleChat(item.title)}
              >
                <FaRobot size={20} />
                {isOpen && <span className="truncate max-w-[300px]">{item.title}</span>}
              </div>

              {/* 3 dots menu for actions */}
              <div className="relative">
                <MdMoreHoriz
                  size={24}
                  className="cursor-pointer"
                  onClick={() => setShowMenu(showMenu === item.id ? null : item.id)}
                />
                {showMenu === item.id && (
                  <div className="absolute right-0 bg-gray-100 rounded p-2 w-40 mt-2">
                    <button
                      onClick={() => handleAction("rename", item.id)}
                      className="w-full text-left text-xs px-2 py-2 text-black"
                    >
                      Rename
                    </button>
                    <button
                      onClick={() => handleAction("share", item.id)}
                      className="w-full text-left text-xs px-2 py-2 text-black"
                    >
                      Share
                    </button>
                    <button
                      onClick={() => handleAction("delete", item.id)}
                      className="w-full text-left text-xs px-2 py-2 text-black"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
