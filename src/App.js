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

	onSearchChange=(event)=>{
		this.setState({searchField:event.target.value});
		const filteredRobots = this.state.robots.filter(robot=>{
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});
		console.log(filteredRobots);
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
