import React, {Component} from 'react';

export default class Results extends Component
{
    render ()
    {
        if(this.props.results.length > 0)
        {
            return(
                <div class="photo-container">
                    <h3>Results</h3>
                    <ul>{this.props.results}</ul>
                </div>
            );
        }
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