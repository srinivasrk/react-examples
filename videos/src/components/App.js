import React from 'react';
import SearchBar from './SearchBar';
import youtubeApi from '../api/youtubeApi';
import key from '../api/config';
import VideoList from './VideoList';
import VideoDescription from './VideoDescription';
import './App.css';

class App extends React.Component {
  state = { currentResults: [], currentVideoSelected: null };

  onSearchSubmit = (term) => {
    youtubeApi.get('/search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: key,
        type: 'video',
        q: term
      }
    }).then((response) => {
      /**
       * response.data.items will be a list of youtube video descriptions
       */
      console.log(response);
      this.setState({
        currentResults: response.data.items
      });
      console.log(this.state);
    })
  }

  onVideoSelect = (video) => {
    this.setState({ currentVideoSelected: video })
  }

  render () {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <VideoDescription video={this.state.currentVideoSelected} ></VideoDescription>
        <div className="video-list"><VideoList onVideoSelect={this.onVideoSelect} videos={this.state.currentResults} /></div>
      </div>
    )
  }
}

export default App;
