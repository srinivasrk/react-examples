import React from 'react';
import VideoCard from './VideoCard';

class VideoList extends React.Component {
  render () {
    const images = this.props.videos.map((video) => {
      return <VideoCard key={video.id.videoId} title={video.snippet.title} image={video.snippet.thumbnails.high.url} description={video.snippet.description} />
    });
    return (
      <div>{images}</div>
    )
  }
}

export default VideoList;