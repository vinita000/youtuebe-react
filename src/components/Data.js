import React, { useState, useEffect } from 'react'
import Model from '../components/Modal'
import { setText, setStatus } from '../utils/statusSlice'
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";


const Data = ({data, onEdit, editIndex, setEditIndex, editedTask, setEditedTask, editStatus, setEditStatus, filter}) => {
  console.log("tt",filter)
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isUpdate] = useState(true)

  const dispatch = useDispatch();
  // const [videos, filterVideos, setFilterVideos] = useVideoList([]);
  const text = useSelector((store) => store.statusText.text); //select specifiv portion odf store
  const status = useSelector((store) => store.statusText.status); 
  const [filterData, setFilterData] = useState([]);
  console.log("data", data)
  // const [editedText, setEditedText] = useState(text);

  // console.log("text1234", text);
  // const ID = uuidv4

  const handleModalOpen = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    dispatch(setText('')); // Reset the text input value
    dispatch(setStatus('incomplete'));
  }

  // const handleDataFromModal = () => {
  //   console.log("")
  // }

  const handleEdit = (dd) => {
    // console.log("index", dd);
    onEdit(dd);
  }

  useEffect(() => {
    const filteredData = data.filter((dd) => {
      if (filter === 'all') {
        return true; // Return all data when filter is set to 'all'
      } else {
        return dd.status === filter; // Return data matching the filter status
      }
    });
  
    setFilterData(filteredData);
  }, [data, filter]);
  
  return (
    <div className='items-center p-4 ml-auto'>
      {/* {console.log("filterData", filterData)}
      {console.log("Data", data)} */}

    {
      (filter ? filterData : data).map((dd, index) => (
        <div key={dd.id} className="flex items-center shadow-sm p-6 border border-gray-100 bg-gray-200 justify-between">
          <span className={"font-bold px-2 " + (dd.status === 'completed' && 'line-through')}>{dd.text}</span>
          <button onClick={()=>{handleModalOpen(); handleEdit(dd);}} ><img className="h-4 w-4" alt="edit" src="https://www.shutterstock.com/image-vector/edit-vector-icon-260nw-546038194.jpg" /></button>
          <Model isOpen={isModalOpen} onClose={handleModalClose} isUpdate={editIndex !== null} editIndex={editIndex} setEditIndex={setEditIndex} editedTask={editedTask} setEditedTask={setEditedTask} editStatus={editStatus} setEditStatus={setEditStatus} data={data}/>
        </div>
      ))
    }
    </div>
  )
}

export default Data
