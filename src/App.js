import React, { Component } from 'react'
import CardList from './CardList'
import Searchbox from './Searchbox'
import './App.css'

class App extends Component{
	constructor(){
	 	super();

	 	this.state = {
			robots:robots,
			searchField:''
	 	}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=>this.setState({robots:users}));
		
	}
	onSearchChange=(event)=>{
		this.setState({searchField:event.target.value});
	}
	render(){
		const filteredRobots = this.state.robots.filter(robot=>{
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});
		return(
				<div className='tc'>
					<h1 className='f1'>Robofriends</h1>
					<Searchbox searchChange={this.onSearchChange}/>
					<CardList robots={filteredRobots}/>
				</div>
					
			);
	}

}

export default App;
