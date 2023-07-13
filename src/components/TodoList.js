import React, { useState, useEffect } from "react";
import Model from "./Modal";
import Data from './Data'
import { setText, setStatus, setId } from '../utils/statusSlice';
import { setData } from '../utils/dataSlice';
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";


const TodoList = () => {
  const [filter, setFilter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedTask, setEditedTask] = useState();
  const [editStatus, setEditStatus] = useState();

  const dispatch = useDispatch();
  const data = useSelector((store) => store.data1.data)
  console.log("data11", data)
  const ID = uuid();

  // const handleChange = (e) => {
  //   setFilter(e.target.value);
  // };

  const handleModalOpen = () => {
    console.log("hello")
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    dispatch(setText('')); // Reset the text input value
    dispatch(setStatus('incomplete')); 
  };

  const handleDataFromModal = (newData) => {
   
    console.log("lili", newData);
    // dispatch(setData((prevData) => [...prevData, newData])
    dispatch(setData({
      id: newData.id,
      text: newData.text,
      status: newData.status
    })
    )
  };

  // useEffect(() => {
  //   return () => {
  //     localStorage.removeItem('todos');
  //     // Additional logic or state updates if needed
  //   };
  // }, []);

  // Load data from local storage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem('todos');
    if (storedData) {
      dispatch(setData(JSON.parse(storedData)));
      
    }
  }, []);

  // Update local storage when data changes
  useEffect(() => {
    // localStorage.removeItem('todos');
    console.log("local",data)
    localStorage.setItem('todos', JSON.stringify(data));
  }, [data]);

  // useEffect(() => {
  //   return () => {
  //     localStorage.removeItem('todos');
  //   };
  // }, []);

  const handleEditItem = (dd) => {
    console.log("task", dd)
    setEditIndex(dd.id);
    // console.log("editIndex", editIndex)
    // console.log("hello", data[index]);
    // const itemToEdit = data[index];
    // // console.log("itemToEdit", itemToEdit);
    // // dispatch(setText(itemToEdit.text));
    // // dispatch(setStatus(itemToEdit.status));
    setEditedTask(dd.text);
    setEditStatus(dd.status);

  }

  const find = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div className="font-bold">
      {console.log(ID)}
      <h1 className="text-black-1 inline-block font-poppins text-4xl font-bold uppercase mx-auto my-8 text-center pl-[23rem]">
        TODO LIST
      </h1>
      <div className="">
        <button
          className="bg-blue-500 text-white font-bold py-2 px-8 rounded-xl ml-60 focus:outline-none hover:bg-blue-600 cursor-pointer"
          onClick={handleModalOpen}
        >
          Add Task
        </button>
        <select
          className="rounded-m bg-gray-300 h-10 w-50 py-2 px-6 cursor-pointer ml-[10rem]"
          value={filter}
          onChange={(e) => find(e)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      <Model isOpen={isModalOpen} onClose={handleModalClose} onDataSubmit={handleDataFromModal} isUpdate={false} editIndex={editIndex} data={data}/>
      <Data data={data} onEdit={handleEditItem} editIndex={editIndex} setEditIndex={setEditIndex} editedTask={editedTask} setEditedTask={setEditedTask} editStatus={editStatus} setEditStatus={setEditStatus} filter={filter}/>
    </div>
  );
};

export default TodoList;
