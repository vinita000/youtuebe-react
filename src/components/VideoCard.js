import React from 'react'

const VideoCard = ({ info }) => {
  // console.log(info)
  // const { statistics } = info;
  // const { channelTitle, title, thumbnails } = info?.snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-xl">
      <img className="rounded-lg" alt="thumb-img" src={info?.snippet?.thumbnails.medium.url} />
      <ul>
        <li className="font-bold">{info?.snippet.title}</li>
        <li>{info?.statistics.viewCount} views</li>
      </ul>
    </div>
  );
}

export default VideoCard
// Higher Order Component - A functio that takes component as parameter and returns component.
/*
/ if u want to show Ad video card in video container component with normal video card component then we use high order component
const AdVideoCard = (VideoCard) => {
  return (
    <div className="p-1 m-1 border border-red-900">
      <VideoCard />
    </div>
  )
}
*/

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-900">
      <VideoCard info={info}/>
    </div>
  )
}