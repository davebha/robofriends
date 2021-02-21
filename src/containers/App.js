import React, { Component } from 'react'
import CardList from './CardList'
import Scroll from './Scroll'
import Searchbox from './Searchbox'
import './App.css'

class App extends Component{
	constructor(){
	 	super();

	 	this.state = {
			robots:[],
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

		if (this.state.robots.length ===0){
			return <h1 className='tc'>Loading...</h1>;
		}else{
			return(
					<div className='tc'>
						<h1 className='f1'>Robofriends</h1>
						<Searchbox searchChange={this.onSearchChange}/>
						<Scroll>
							<CardList robots={filteredRobots}/>
						</Scroll>
					</div>
						
				);
		}
	}

}

export default App;
