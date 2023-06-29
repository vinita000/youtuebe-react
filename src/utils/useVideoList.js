import { useState, useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import { useDispatch } from "react-redux";
import { setVideos, setFilterVideos } from '../utils/filterVideos'
import { useSelector } from "react-redux";


const useVideoList = () => {
  
  // const [videos, setVideos] = useState([]);
  // const [filterVideos, setFilterVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const videos = useSelector((store) => store.filter.videos); //select specifiv portion odf store
  const filterVideos = useSelector((store) => store.filter.filterVideos);
  console.log("videos1", videos)
  console.log("filterVideos1", filterVideos)
  const dispatch = useDispatch();

  useEffect(()=>{
    getVideos();
  }, [])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // Retrieve the search query from local storage
    const storedQuery = localStorage.getItem('searchQuery');
    setSearchQuery(storedQuery || '');
    // console.log(json.items);
    // setVideos(json.items);
    console.log("videos12", json.items)
    dispatch(
      setVideos({
        [videos]: json.items,
      })
    );

    dispatch(
      setFilterVideos({
        [filterVideos]: json.items,
      })
    );
    // setFilterVideos(json.items)
  }
  console.log("videos12", videos)
  console.log("filterVideos12", filterVideos)
  return [videos, filterVideos, setFilterVideos]
}

export default useVideoList;

  