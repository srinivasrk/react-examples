import React from 'react';

class VideoCard extends React.Component {
  render () {
    return (
      <div className="ui card">
        <div className="content">
          <div className="header">{this.props.title}</div>
        </div>
        <div className="content">
          <img src={this.props.image} style={{width: '100%' }}/>
          <h4 className="ui sub header" style={{'word-break': 'break-word'}}>{this.props.description}</h4>
        </div>
      </div>
    )
  }
}

export default VideoCard;