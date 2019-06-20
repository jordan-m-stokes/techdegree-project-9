import React, {Component} from 'react';

import {
	BrowserRouter,
	Route,
	Switch
} from 'react-router-dom';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Results from './components/Results';
import EmptyBody from './components/EmptyBody';
import NotFound from './components/NotFound';

class App extends Component
{
	render()
	{
		return (
		<BrowserRouter>
			<div className="App">
          		<Route path="/" component={Header}/>
          		<Route path="/" component={Navigation}/>
				<Switch>
					<Route exact path="/" component={EmptyBody}/>
					<Route exact path="/results/:query" component={Results}/>
					{/*route dedicated to trimming excess paramaters that are submitted*/}
					<Route exact path="/results/:query/:excess" component={Results}/>
					<Route component={NotFound}/>
        		</Switch>
			</div>
		</BrowserRouter>
		);
	}
}

export default App;
