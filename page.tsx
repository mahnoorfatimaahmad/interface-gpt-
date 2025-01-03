"use client";

import Sidebar from "./components/Sidebar";
import CenteredInput from "./components/ChatArea";

const Page = () => {
  const handleToggleChat = (title: string) => {
    console.log("Chat toggled:", title);
    //  for toggling chat
  };

  return (
    <div className="flex-col">
      <div className="flex overflow-hidden">
        <Sidebar onToggleChat={handleToggleChat} />
        
        <div className="flex-col">
          <CenteredInput />
        </div>
      </div>
      
      <footer className="bg-blue-100 text-black py-2 text-center mt-auto font-semibold">
        <p> Check important information!</p>
      </footer>
    </div>
  );
};

export default Page;
