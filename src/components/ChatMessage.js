import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="w-7 h-7 rounded-full"
        alt="message"
        src="https://yt4.ggpht.com/midZBM_Ez8cK9jTR8aXxqhxqm_wxRU1toB3LT7r5fXfJ9R3NV0uinrWMB7xDcBs_uigoO_JAc7k=s64-c-k-c0x00ffffff-no-rj"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
