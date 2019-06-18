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
        			<li><NavLink to={`/dogs`}>Dog</NavLink></li>
					<li><NavLink to={`/sunset`}>Sunset</NavLink></li>
					<li><NavLink to={`/snow`}>Snow</NavLink></li>
				</ul>
			</nav>
     	);
      
    }
}