import React from 'react';
import SearchBar from './SearchBar';
import youtubeApi from '../api/youtubeApi';
import key from '../api/config';
import VideoList from './VideoList';
import './App.css';

class App extends React.Component {
  state = { currentResults: [] };

  onSearchSubmit = (term) => {
    console.log(term);
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

  render () {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <div className="video-list"><VideoList videos={this.state.currentResults} /></div>
      </div>
    )
  }
}

export default App;
