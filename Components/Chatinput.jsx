"use client";

import { useEffect, useState } from "react";
import { useSocket } from "./SocketProvider";

const Chatinput = () => {
  const [data, setdata] = useState("");
  const { socket, isConnected } = useSocket();
  const handleSubmit = (e) => {
    if (data.trim === "") return;
    e.preventDefault();
    socket.emit("chat-message", data);
    console.log(data);
    setdata("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex items-center">
      <input
        placeholder="Enter your message"
        value={data}
        onChange={(e) => setdata(e.target.value)}
        className="p-2 text-black text-lg w-full"
      />
      <button type="submit" className="bg-blue-500 rounded-lg p-2">
        Send
      </button>
    </form>
  );
};

export default Chatinput;
