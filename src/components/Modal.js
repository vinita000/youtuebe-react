import React, { useState } from "react";
import { setText, setStatus, setId } from "../utils/statusSlice";
import { useDispatch, useSelector } from "react-redux";
import { setData, updateData } from "../utils/dataSlice";
import { v4 as uuid } from "uuid";

const Modal = ({
  isOpen,
  onClose,
  onDataSubmit,
  isUpdate,
  editIndex,
  setEditIndex,
  editedTask,
  setEditedTask,
  editStatus,
  setEditStatus,
  data
}) => {
  // const [text, setText] = useState('')
  // const [status, setStatus] = useState('')
  const dispatch = useDispatch();
  const ID = uuid();
  // const [videos, filterVideos, setFilterVideos] = useVideoList([]);
  const text = useSelector((store) => store.statusText.text); //select specifiv portion odf store
  const status = useSelector((store) => store.statusText.status);
  const id = useSelector((store) => console.log(store.statusText.id));

  // console.log("text", id);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "text") {
      // setText(value)
      dispatch(setText(value));
    } else if (name === "status") {
      // setStatus(value)
      dispatch(setStatus(value));
    }
    // dispatch(setId(id));
    // console.log(data);
    // setText(data)
  };

  const handleSubmit = () => {
      const newData = {
        id: ID,
        text: text,
        status: status,
      };
      onDataSubmit(newData);
      // setText('')  

    dispatch(setText(""));
    // setStatus('incomplete')
    dispatch(setStatus("incomplete"));
    onClose();
  }

  // const handleUpdateTask = (id, todo, status) => {
  //   // console.log(id);
  //   console.log("todo", todo);
  //   console.log("status", data[editIndex])
    
  //   dispatch(setText(todo));
  //   dispatch(setStatus(status));
  //   // dispatch(setData({
  //   //   text: todo,
  //   //   status: status
  //   // })
  //   // )
  //   console.log("status1", text)
  //   setEditIndex(null);
  //   onClose();
  // };

  const handleUpdateTask = (id, todo, status) => {
    console.log("todo", todo);
    console.log("status", status);
    console.log("editIndex", editIndex);
  
    const updatedData = data.map((task, index) => {
      if (task.id === editIndex) {
        return {
          ...task[editIndex],
          id: editIndex,
          text: todo,
          status: status,
        };
      }
      return task;
    });
  
    console.log("updatedData111", updatedData);

  
    dispatch(updateData(updatedData));
    setEditIndex(null);
    onClose();
  };
  

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity duration-300`}
    >
      <div className="bg-white w-1/2 p-6 rounded-lg shadow-lg left-1/4">
        <h2 className="text-xl font-bold mb-4">
          {isUpdate ? "Update Todo" : "Add todo"}
        </h2>
        <h3 className="p-1 text-gray-500">Title</h3>
        {
            isUpdate && editIndex !== null ? (
            <input
              className="w-4/5 border px-5 border-grey-700 p-2"
              type="text"
              value={editedTask}
              name="text"
              onChange={(e) => setEditedTask(e.target.value)}
            />
          ) : (
            <input
              className="w-4/5 border px-5 border-grey-700 p-2"
              type="text"
              value={text}
              name="text"
              onChange={handleChange}
            />
          )
        }
        <h3 className="p-1 text-gray-500">status</h3>
        {
            isUpdate && editIndex !== null ? (
            <select
              className="w-4/5 border px-5 border-grey-700 p-2 cursor-pointer"
              onChange={(e) => setEditStatus(e.target.value)}
              value={editStatus}
              name="status"
            >
              <option value="completed">Completed</option>
              <option value="incomplete">Incomplete</option>
            </select>
          ) : (
            <select
              className="w-4/5 border px-5 border-grey-700 p-2 cursor-pointer"
              onChange={handleChange}
              value={status}
              name="status"
            >
              <option value="completed">Completed</option>
              <option value="incomplete">Incomplete</option>
            </select>
          )
        }
        <div className="mt-4 flex justify-between">
            {/* {console.log("is", isUpdate)}
            {console.log("biz", editIndex)} */}
          {isUpdate && editIndex !== null ? (
            
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-gray-600"
              onClick={() => handleUpdateTask(editIndex, editedTask, editStatus)}
            >
              Update Task
            </button>
          ) : (
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-gray-600"
              onClick={handleSubmit}
            >
              Add Task
            </button>
          )}
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
