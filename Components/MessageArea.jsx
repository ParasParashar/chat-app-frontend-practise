"use client";
import { io } from "socket.io-client";
import { useSocket } from "../Components/SocketProvider";
import { useEffect, useState } from "react";
// const socket = io("http://localhost:8000");
const MessageArea = () => {
  const [result, setResult] = useState([]);
  const { socket, isConnected } = useSocket();

  // getting socket data
  useEffect(() => {
    if (!socket) return;
    socket.on("receive-message", (message) => {
      setResult((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("receive-message");
    };
  }, [socket]);

  return (
    <div className="bg-neutral-800 min-h-[500px]  rounded-lg w-full flex flex-col gap-3  p-3">
      <p>{isConnected ? "Socket is connected" : "Not connected"}</p>
      {result.map((item) => (
        <p className="bg-blue-500 text-white p-3 rounded-full">{item}</p>
      ))}
    </div>
  );
};

export default MessageArea;
