import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
// import { useParams } from 'react-router-dom';
import { useSearchParams } from "react-router-dom"; // for query params we use useSearchParams hook - url search params
import Description from './Description';
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'

const WatchPage = () => {
  const [videoData, setVideoData] = useState({});
  const [searchParams] = useSearchParams();
  const [Subscribe, setSubscribe] = useState("Subscribe")
  const id = searchParams.get("v");
  const dispatch = useDispatch();

  const handleSubscribe = () => {
    setSubscribe(prevValue => (prevValue === "Subscribe" ? "Subscribed" : "Subscribe"))
  }
  const getVideo = async () => {
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" +
        id +
        "&key=AIzaSyDAuZS9bjjVeMiVvBWI-Spov_vvKk2ximU"
    );
    const json = await data.json();
    console.log(json.items);
    setVideoData(json.items);
  };
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    getVideo();
  }, []);
  return (
    <div className="flex flex-col w-full">
      <div className="px-5 flex w-full">
        <div>
          <iframe
            width="1000"
            height="450"
            src={"https://www.youtube.com/embed/" + id}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
        {/* <h1 className="font-bold text-xl p-2 m-1">
          {videoData[0]?.snippet?.title}
        </h1>
        <div className="flex">
          <div className="flex">
            <h1 className="font-bold text-xl p-1 m-2">
              {videoData[0]?.snippet?.channelTitle}
            </h1>
            <button className="bg-gray-500 p-2 m-2 rounded-full" onClick={() => handleSubscribe()}>
              {Subscribe}
            </button>
            <button className="bg-gray-500 p-2 rounded-l-full cursor-pointer">
              <img
                className="h-10"
                alt="like"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/1200px-Facebook_Thumb_icon.svg.png"
              />
            </button>
            <button className="bg-gray-500 p-2 rounded-r-full border-l border-gray-700 cursor-pointer">
              <img
                className="h-7 m-auto"
                alt="dislike"
                src="https://www.avidlyagency.com/hubfs/Imported_Blog_Media/Facebook-thumb-down-7-1-1-2.png"
              />
            </button>
          </div>
          <div className="flex ml-96">
            
            <button className="bg-gray-500 p-2 rounded-full cursor-pointer">
              <img
                className="h-7 bg-none"
                alt="share"
                src="data:image/png;base64,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"
              />
            </button>
            <button className="bg-gray-500 p-2 rounded-full cursor-pointer">
              <img
                className="h-7"
                alt="dot"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8BAQH8/PwEBARWVlb39/dpaWlbW1u2trb09PTo6Oje3t7k5OScnJzNzc1PT0+Ojo7JycmNjY2/v7+mpqZzc3OEhISVlZVFRUU3NzesrKxgYGDCwsJlZWV+fn4wMDAREREnJydCQkLX19cWFhZ1/XrsAAADGklEQVR4nO3Z2VbbMBCAYUneshJCFmcjrO//jJWMT3DRjHELdnLxf+dQWhjEjBZ77BoDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPh3Lnx8/OG6hIcoFz51Cq9iTcfQG/HfyV6zymWZp2n+sMo6RU/XmyItzodZp+hstD0uinx+95MEf8Bvn3FpL/Jp+4by31vtL9FPo7adXX1rmn8Ofj+5zn4dPdumc/s6zhaXyMR/7Kb65gvH9aGOq3/icI2t6nNIkmbW+3FL9F0zOgl/XbXknO3qoMvg+cAl+l+2tZGXsbKTsqrAr+EnLWmX7ePBN33WI+Rg1s0FrBfGLrR5ntioQv/PqXYWcyuY91hPzM2sVKFdKyWmYvhOiR5JBfoJ6bOiiDjLnnS1cWYZb9HKSozOnoVw/5ViyJM4kVNO7EFI2ZlXpcK9OPghWu9at9vo7yi1CndxrPNbWknZToRws5PCw1fK/gu7WMTJ1rJoKzm/KBphyc1YjV4MUVpNTcK+CdEbJTaxZyH6Th98qHPo2zVt2yXCxcOZo5ryURheuZIGbS3Fb3LV7U0xEsJTNToVhm+pUDi2PdGPilChMYUaXQjRN7CGJpxD5VpqpUeds5qy1IrdwDk0bddSaZrVG5zvgWKZOrZwK+qNej8U7+EzZcnFRszp03ffd1kNUzmFRGyPndlLFfovvYjRcVNvP9raQRvTR2Wa5WvBSpoNn7N0WXIuS+QJSYfsS8OzhUQ6V4G08RL7Kj48hR5I3NRSM9GbaivFOajdv3wSxV0XRohahLCqQ3alVR7b+JH2aaw8tbuvz/jVG4qTOnj2Gs/IwM/4wf3Xid6pN2TnhLvcUh3ZP/pH2/o88Lu26ped3m1zqluu5eHl9eSzdws/k7Z0YOFdW3mJDdHv0jVpANm8sYm+eTz1WZ8+F+ap7UXbh0mjEyoHbNf+4pN8m+dFetyuxt9mHN46TQ7nYpFu1rNvXw2GaHd6eEzTx3LZ9T9GrutHGd5+eQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAq/gD7H0WItx0uzsAAAAASUVORK5CYII="
              />
            </button>
          </div>
        </div>
        <h4 className="m-2">4.91M subcribers</h4>
        <div className="bg-gray-300 shadow p-2 m-2 w-9/12">
          <h1 className="font-bold">1.6M views 16 hours ago #3 on Trending</h1>
          <div className="w-9/12"><Description description={videoData[0]?.snippet?.description} /></div>
        </div> */}
      </div>
        <CommentsContainer />
     </div> 
  );
};

export default WatchPage;
