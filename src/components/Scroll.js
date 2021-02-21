import React from 'react'


const Scroll = (props)=>{

	return(
	<div style={{overflowY:'scroll',height:'1000px',background:'rgba(0,128,128,1)'}}>
		{props.children}
	</div>);
}

export default Scroll;
