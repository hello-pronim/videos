import "./VideoItem.css";

import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  const {
    snippet: { title, thumbnails, description },
  } = video;

  return (
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <img
        className="ui image"
        alt={description}
        src={thumbnails.default.url}
      />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
