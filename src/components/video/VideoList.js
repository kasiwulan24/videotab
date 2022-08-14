import React from "react";
import VideoItem from "./VideoItem";
const Videolist = ({ video, onVideoSelect }) => {
  const renderList = video.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });
  return <div className="ui very relaxed list">{renderList}</div>;
};
export default Videolist;
