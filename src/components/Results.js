import React, {Component} from 'react';

import Axios from 'axios';

import Config from '../Config';

import Image from './Image'

export default class Results extends Component
{
    state =
	{
		apiKey: Config.apiKey,
        results: [],
        query : '',
        loading: false
    };

    //converts raw data from flickr into usable JSX full of images
	prepareResults(results)
	{
		return results.map( (result, index) =>
		{
            return (<Image key={index} data={result}/>);
		});
	}

    //takes a query submitted by the client and sends a request for image data from flickr
    handleSearch(query)
    {
        let state = this.state;
        
        state.loading = true;

		this.setState(state);

        Axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.state.apiKey}&format=json&nojsoncallback=1&text=${query}&per_page=24&sort=relevance`)
			.then(response =>
			{
                let state = this.state;

                //makes the response data visible to the user
                state.results = this.prepareResults(response.data.photos.photo);
                state.query = query;
                state.loading = false;

                this.setState(state);
			})
			.catch(error =>
			{
                console.log('error fetching and parsing data', error);
                
                //displays to the user that something went wrong
                let state = this.state;

                state.results = [<p>Something went wrong. We couldn't retrieve your images.</p>];
                state.query = query;
                state.loading = false;

                this.setState(state);
			});
    }

    //is called on a route change
    handleRouteChange()
    {
        const paramaters = this.props.match.params;

        //makes sure the route is valid and reroutes if not
        if(paramaters.excess)
        {
            this.props.history.push(`/results/${paramaters.query}`);
        }
        //requests image data bases on new route
        else
        {
            this.handleSearch(paramaters.query);
        }
    }

    //on update checks if query has changed and calls for an image request if one
    //isn't already being requested
    componentDidUpdate()
    {
        if(this.state.query !== this.props.match.params.query && !this.state.loading)
        {
            this.handleRouteChange();
        }
    }
    
    //handles a route change by the user from the address bar of the browser
    componentDidMount()
    {
        this.handleRouteChange();
    }

    render ()
    {
        //shows the user that the data is loading
        if(this.state.loading)
        {
            return(
                <div className="photo-container">
                    <h4>Loading...</h4>
                </div>
            )
        }
        //shows the user the image results from request
        if(this.state.results.length > 0)
        {
            return(
                <div className="photo-container">
                    <h3>Results "{this.state.query}":</h3>
                    <ul>{this.state.results}</ul>
                </div>
            );
        }
        //shows the user that no results were found
        else
        {
            return(
                <div className="photo-container">
                    <h3>No Results Found</h3>
                    <p>You search did not return any results. Please try again.</p>
                </div>
            );
        }
    }
}