import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // useDispatch is hook
import { toggleMenu } from "../utils/appSlice";
import { SEARCH_VIDEO_API } from "../utils/constants";
import { chacheResult } from "../utils/searchSlice";
import { filterData } from "../utils/helper/filterData";
import useVideoList from "../utils/useVideoList";
import { setVideos, setFilterVideos } from '../utils/filterVideos'

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectSuggestion, setSelectSuggestion] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);

  // const videoss = useSelector((store) => store.filter.videos); //select specifiv portion odf store
  // const filterVideos = useSelector((store) => store.filter.filterVideos); //select specifiv portion odf store
  const dispatch = useDispatch();
  // const [videos, filterVideos, setFilterVideos] = useVideoList([]);
  const videos = useSelector((store) => store.filter.videos); //select specifiv portion odf store
  const filterVideos = useSelector((store) => store.filter.filterVideos); 
  // seach cache is look like

  /**
   * searchCache = {
   *   "iphone": ["iphone11", "iphone12",.......]
   * }
   *
   * searchQuery = "iphone"
   */


  const handleSuggestionClick = (suggestion) => {
    console.log("suggestion", suggestion)
    setSelectSuggestion(suggestion);
    const data = filterData(suggestion, Object.values(videos)[0]);
    // console.log("Hello123", data)
    // setFilterVideos(data);
    dispatch(
      setFilterVideos({
        [filterVideos]: data,
      })
    );
  }

  const handleSearchQuery = (e) => {

    const query = e.target.value;
    console.log(query)
    setSearchQuery(query);
    localStorage.setItem("searchQuery", query); // Save the search query to local storage
  };

  // console.log(searchQuery);
  useEffect(() => {
    // Api call on every key stroke but we make an api call if and only if the difference between two key stroke is greater than(>) 200ms
    // make api call at every key press
    // but if difference between two api call is less than 200 ms just decline api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer); // it call every time my comonent re render and just clear imer
    };
  }, [searchQuery]);

  /**
   *  key - i
   *  render component
   *  useEffect call
   *  start timer and make api call after 200 ms
   *
   *  key - ip
   *  destroy component and call useEffect return method also
   *  re-render component
   *  useEffect call
   *  new start timer and make api call after 200 ms
   *
   * suppose if any key press and after 200 ms no key press is happen then its make an api
   */

  const getSearchSuggestions = async () => {
    const data = await fetch(SEARCH_VIDEO_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    // setSearchQuery(json);
    setSuggestions(json[1]);

    // update in cache
    dispatch(
      chacheResult({
        [searchQuery]: json[1],
      })
    ); // update cache in store
  };
  // const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    // dispatch an action
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg sticky top-0 bg-slate-300">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 cursor-pointer"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg"
        />
        <a href="/">
          <img
            className="h-12 mx-2"
            alt="youtube"
            src="https://freepngimg.com/download/youtube/77767-media-youtube-streaming-live-logo-banner.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="w-1/2 border px-5 border-grey-600 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearchQuery(e)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button
            className="border border-grey-600 px-5 py-2 rounded-r-full bg-gray-100"
            onClick={() => {
              //  console.log("Head",Object.values(videos)[0])
              const data = filterData(searchQuery, Object.values(videos)[0]);
              console.log("Hello123", data)
              // setFilterVideos(data);
              dispatch(
                setFilterVideos({
                  [filterVideos]: data,
                })
              );
            //  localStorage.setItem("filterVideos", data);
            //  console.log(localStorage.getItem('filterVideos'));
            }}
          >
            <img
              className="h-6"
              alt="search"
              src="https://img.uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png"
            />
          </button>
        </div>
        {showSuggestion && (
          <div className="fixed bg-white py-2 px-2 w-[31rem] shadow-lg rounded-lg border border-gray-100 absolute">
            <ul>
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100 flex items-center"
                  onClick={() => console.log("clicked")}
                >
                  <img
                    className="h-2 w-2 mr-2"
                    alt="search-icon"
                    src="https://img.uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png"
                  />
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8 object-right"
          alt="user-icon"
          src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
        />
      </div>
    </div>
  );
};

export default Head;

/// LRU Cache - Last Recently Used - it allow u to store only 100 data if data greater than 100 it will start removing from top
