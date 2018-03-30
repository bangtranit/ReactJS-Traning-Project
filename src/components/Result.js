import React, { Component } from 'react';
class Result extends Component{
	constructor(props){
		super(props);
	}
	setStyle(){
		return {
			color:this.props.color,
			borderColor:this.props.color,
			fontSize:this.props.font
		};
	}
	render(){
		return(
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<p>Color: {this.props.color} Font: {this.props.font}px</p>
				<div id="content" style={ this.setStyle() }>
					Noi dung text
				</div>
			</div>
		);
	}
}
export default Result;