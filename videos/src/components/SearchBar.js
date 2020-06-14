import React from 'react';

/**
 * This class will render a search bar. The parent component passes in the call back function as the prop
 * The call back function is then executed when the search is submitted.
 */
class SearchBar extends React.Component {
  state = { term: '' }

  onFormSubmit (event) {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }
  
  render () {
    return (
      <div className="ui segment"> 
        <form onSubmit={(e) => this.onFormSubmit(e)} className="ui form">
          <div className="field">
            <label> Image search </label>
            <input type="text"
              onChange={(e) => this.setState({ term: e.target.value })} 
              value={this.state.term}
            />  
          </div>
        </form>  
      </div>
    )
  }
}

export default SearchBar