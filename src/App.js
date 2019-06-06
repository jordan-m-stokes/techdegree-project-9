import React, {Component} from 'react';
import Config from '../../config.js'

import Header from './components/Header';
import Navigation from './components/Navigation';
import Results from './components/Results';

class App extends Component
{
	static constructUrl(result)
	{
		return '';
	}

	static fetchImage(url)
	{
		
	}

	static prepareResults(results)
	{
		return results.reduce(result =>
		{
			return (<li>{this.fetchImage(result)}</li>)
		});
	}

	render()
	{
		console.log(Config.key);

		return (
		<div className="App">
			<Header />
			<Navigation />
			<Results results={[]}/>
		</div>
		);
	}
}

export default App;
