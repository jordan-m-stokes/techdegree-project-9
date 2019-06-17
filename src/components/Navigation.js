import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import Search from './Search';

export default class Navigation extends Component
{
	//redirects route when user submits a search
	redirect = (query) =>
	{
		if(query.length > 0)
		{
			this.props.history.push(`/${query}`);
		}
	}

    render()
    {
      	return (
    		<nav className="main-nav">

				<Search handleSearch={this.redirect}/>

				<ul className="course-nav">
        			<li><NavLink to={`/cats`}>Cats</NavLink></li>
					<li><NavLink to={`/dogs`}>Dogs</NavLink></li>
					<li><NavLink to={`/computers`}>Computers</NavLink></li>
				</ul>
			</nav>
     	);
      
    }
}