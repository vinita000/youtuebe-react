import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen); //select specifiv portion odf store

  if(!isMenuOpen) { // early return patter
    return null;
  }
  return (
    <div className="shadow-lg p-5 w-48">
      <ul>
        <Link to={"/"} ><li>Home</li></Link>
        <li>Shorts</li>
        <li>Video</li>
        <li>Live</li>
      </ul>
      <h1 className="pt-5 font-bold">subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Movies</li>
        <li>NamasteReact</li>
      </ul>
      <h1 className="pt-5 font-bold">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Movies</li>
        <li>NamasteReact</li>
      </ul>
    </div>
  )
}

export default SideBar
