import React from 'react';
import VideoCard from './VideoCard';

class VideoList extends React.Component {
  render () {
    const images = this.props.videos.map((video) => {
      return <VideoCard onVideoSelect={this.props.onVideoSelect} key={video.id.videoId} video={video} />
    });
    return (
      <div>{images}</div>
    )
  }
}

export default VideoList;