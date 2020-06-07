import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// React expects the class to extend react component
// built in functionalities from component and override render
class App extends React.Component {
  state = {lat: null, errorMessage: ''};

  componentDidMount () {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>  {
        this.setState({ lat: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  renderContent () {
    if (this.state.errorMessage !== '' && this.state.lat === null) {
      return (
        <div>
          Error: {this.state.errorMessage}
        </div>
      )
    } 
    if (!this.state.errorMessage && this.state.lat) {
      // component will render child when state is changed
      return <SeasonDisplay lat={this.state.lat} />
    }
    return (
     <Spinner />
    )
  }

  render () {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)