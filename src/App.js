import React, { Component } from 'react'
import { robots } from './robots'
import CardList from './CardList'
import Searchbox from './Searchbox'


class App extends Component{

	render(){
		return(
				<div className='tc'>
					<h1>Robofriends</h1>
					<Searchbox />
					<CardList robots={robots}/>
				</div>
					
			);
	}

}

export default App;
