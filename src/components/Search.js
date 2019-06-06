import React, {Component} from 'react';
import SearchIcon from '../res/search-icon';

class Search extends Component
{
    state = 
    {
        text: ''
    }

    onChange = event => {
      this.setState({ text: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleSearch(this.query.value);
        event.currentTarget.reset();
      }

    render()
    {
        return (
            <form className="search-form" onSubmit={this.handleSubmit}>
                <input type="text" 
                    onChange={this.onChange}
                    ref={(input) => this.query = input}
                    placeholder="Search..." />
                <button type="submit" class="search-button">
                    <SearchIcon />	
                </button>
            </form>
        );
    }
}

export default Search;