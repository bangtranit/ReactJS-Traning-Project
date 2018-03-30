import React, { Component } from 'react';
class Reset extends Component{
	onClickReset=()=>{
		this.props.onReset(true);
	}
	render(){
		return(
			<button type="button" className="btn btn-warning" onClick={this.onClickReset}>Reset</button>
		);
	}
}
export default Reset;