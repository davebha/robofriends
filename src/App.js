import React, { Component } from 'react'
import { robots } from './robots'
import CardList from './CardList'
import Searchbox from './Searchbox'


class App extends Component{
	constructor(){
	 	super();

	 	this.state = {
			robots:robots,
			searchField:''
	 	}
	}

	onSearchChange(event){
		console.log(event);
	}
	render(){
		return(
				<div className='tc'>
					<h1>Robofriends</h1>
					<Searchbox searchChange={this.onSearchChange}/>
					<CardList robots={this.state.robots}/>
				</div>
					
			);
	}

}

export default App;
