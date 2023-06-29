import React, { useRef, useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import { fireEvent } from "@testing-library/react";


const LiveChat = () => {
  // const inputRef = useRef();
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // Api Pollling
      // console.log("Api Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + "🔥",
        })
      );
    }, 1500);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      <div className="ml-2 p-2 w-full h-[450px] border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {ChatMessages.map((ch, index) => (
            <ChatMessage key={index} name={ch.name} message={ch.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black rounded-lg flex"
        onSubmit={(e) => {
          e.preventDefault()
          dispatch(addMessage({
            name: "Vinita",
            message: liveMessage
          }))
          setLiveMessage(""); // Reset the liveMessage state
        }}
        
      >
        <input
          className="w-80 px-2"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button onClick={()=>setLiveMessage(liveMessage)}className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
