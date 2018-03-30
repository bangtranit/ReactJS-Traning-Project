import React, { Component } from 'react';
class ColorPicker extends Component{
	constructor(props){
		super(props);
		this.state={
			colors:['red','green','yellow','black']
		}
	}
	showColor(color){
		return{
			backgroundColor : color		
		}
	}
	setActiveColor(color){
		this.props.onReceiverColor(color);
	}
	render(){
		var elmColors = this.state.colors.map((color,index)=>{
			return	<span 
						key={index}
						style={this.showColor(color)}
						className = {this.props.color === color ? "active" : ""}
						onClick = {()=> this.setActiveColor(color)}
					>
					</span>
		});
		return(
			<div className="panel panel-success">
				<div className="panel-heading">
					<h3 className="panel-title">Panel title</h3>
				</div>
				<div className="panel-body">
					<span></span>
						{elmColors}
					<hr />
				</div>
			</div>
		);
	}
}
export default ColorPicker;