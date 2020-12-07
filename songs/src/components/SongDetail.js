import React from 'react';
import { connect } from 'react-redux';

class SongDetail extends React.Component {
  render() {
    if (this.props.song) {
      return (
        <div>{this.props.song.title}</div>
      )
    } else {
      return(
        <div></div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  // state would be all the store data from redux
  return { song: state.selectedSong };
}


export default connect(mapStateToProps)(SongDetail);