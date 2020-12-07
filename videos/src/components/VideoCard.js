import React from 'react';

class VideoCard extends React.Component {
  render () {
    return (
      <div onClick={() => this.props.onVideoSelect(this.props.video)} className="ui card">
        <div className="content">
          <div className="header">{this.props.video.snippet.title}</div>
        </div>
        <div className="content">
          <img src={this.props.video.snippet.thumbnails.high.url} style={{width: '100%' }}/>
          <h4 className="ui sub header" style={{'word-break': 'break-word'}}>{this.props.video.snippet.description}</h4>
        </div>
      </div>
    )
  }
}

export default VideoCard;