import React from 'react';

const VideoDescription = ({ video }) => {
  if (video) {
    return <div> {video.snippet.title} </div>
  } else {
    return <div></div>
  }
}

export default VideoDescription;