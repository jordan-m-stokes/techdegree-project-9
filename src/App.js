import React, {Component} from 'react';

import {
	BrowserRouter,
	Route,
} from 'react-router-dom';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Results from './components/Results';

class App extends Component
{
	render()
	{
		return (
		<BrowserRouter>
			<div className="App">
          		<Route path="/" component={Header}/>
          		<Route path="/" component={Navigation}/>
				<Route excact path="/:query" component={Results}/>
				{/*route dedicated to trimming excess paramaters that are submitted*/}
				<Route excact path="/:query/:excess" component={Results}/>
			</div>
		</BrowserRouter>
		);
	}
}

export default App;
