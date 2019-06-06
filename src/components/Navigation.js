import React, { Component } from 'react';
import Axios from 'axios';

import { Provider } from './context';

import Search from './Search';

export default class Navigation extends Component
{
    constructor()
  	{
		super();

		this.state =
		{
			results: []
		};
	} 
	  
	componentDidMount() 
  	{
    	this.handleSearch();
  	}

    handleSearch = (query = 'dogs') =>
    {
        Axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ec145451782b08cbf4c283a08be1fc4b&format=json&nojsoncallback=1&tags=${query}&per_page=24`)
			.then(response =>
			{
				this.setState({ results: response.data });
				console.log(response.data);
			})
			.catch(error =>
			{
				console.log('error fetching and parsing data', error);
			});
    }

    render()
    {
      	return (
    		<Provider value={this.state.results}>
				<nav class="main-nav">

					<Search handleSearch={this.handleSearch}/>

					<ul>
						<li><a>Cats</a></li>
						<li><a>Dogs</a></li>
						<li><a>Computers</a></li>
					</ul>
				</nav>
			</Provider>
      );
      
    }
}