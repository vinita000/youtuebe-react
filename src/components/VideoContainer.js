import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { useDispatch, useSelector } from "react-redux"; // useDispatch is hook
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper/filterData";
import useVideoList from "../utils/useVideoList";
import { setVideos, setFilterVideos } from '../utils/filterVideos'
// import { useSelector } from "react-redux";
const VideoContainer = () => {
  // const [videos, setVideos] = useState([]);
  // const [filterVideos, setFilterVideos] = useState([]);
  // const [searchQuery, setSearchQuery] = useState("");

  // const [videos, filterVideos, setFilterVideos] = useVideoList([]);
  const videos = useSelector((store) => store.filter.videos); //select specifiv portion odf store
  const filterVideos = useSelector((store) => store.filter.filterVideos); //select specifiv portion odf store

  console.log("videos", videos)
  console.log("filterVideos", filterVideos)
  const [searchQuery, setSearchQuery] = useState('');
  const [offset, setOffset] = useState(0)
  // const videos = useSelector((store) => store.filter.videos); //select specifiv portion odf store
  // const filterVideos = useSelector((store) => store.filter.filterVideos);
  console.log("videos1", videos)
  console.log("filterVideos1", filterVideos)
  const dispatch = useDispatch();

  useEffect(()=>{
    getVideos();
  }, [offset])

  useEffect(() => { //  update offset value when user reaches bottom
    const handleScroll = (e) => {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight = e.target.documentElement.scrollTop + window.innerHeight;
      if (currentHeight + 1 > scrollHeight) {
        setOffset(offset + 5)
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [offset])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API+offset);
    const json = await data.json();
    // Retrieve the search query from local storage
    const storedQuery = localStorage.getItem('searchQuery');
    setSearchQuery(storedQuery || '');
    // console.log(json.items);
    // setVideos(json.items);
    console.log("videos12", json.items)
    setVideos(pre => [...pre, ...json.items]);
    dispatch(
      setVideos({
        [videos]: json.items,
      })
    );
    setFilterVideos(pre => [...pre, ...json.items]);

    dispatch(
      setFilterVideos({
        [filterVideos]: json.items,
      })
    );
    // setFilterVideos(json.items)
  }
  // if (filterVideos.length === 0 && videos.length > 0)
  //   return <h1>No resturant found...</h1>;

  return (
    // console.log("hello", Object.values(filterVideos)[0])
    <div className="flex flex-wrap">
      {/* {videos[0] && <AdVideoCard info={videos[0]} />} */}
      {
        // console.log("hello1",  localStorage.getItem('filterVideos'))
        Object.values(filterVideos)[0] && Object.values(filterVideos)[0].map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))
      }
    </div>
  );
};

export default VideoContainer;
