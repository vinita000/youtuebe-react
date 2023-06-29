import React from "react";

const Comment = (props) => {
  console.log("data1", props);
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-xl my-2">
      <img
        className="h-6 w-6"
        alt="user"
        src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
      />
      <div className="px-3">
        <p className="font-bold">{props.data.name}</p>
        <h6>{props.data.text}</h6>
      </div>
    </div>
  );
};

export default Comment;
