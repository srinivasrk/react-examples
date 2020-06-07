// import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create a React component
// ES 2015 class is a keyword 'reserved' so you cannot use class in JSX instead use className.
const App = () => {
  const buttonText = {text: 'Click Me!'};
  return (
    <div>
      <label htmlFor="name" className="label"> Enter name: </label>
      <input id="name" type="text"/>
      <button style={{ backgroundColor: 'blue', color: 'white' }}> {buttonText.text} </button>
    </div>
  );
};

// Take the React component and render on screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);