import React from 'react'
import { robots } from './robots'
import CardList from './CardList'

const App = ()=>{
	return(
			<div>
				<h1>Robofriends</h1>
				<Searchbox />
				<CardList robots={robots}/>
			</div>
				
		);
}

export default App;
