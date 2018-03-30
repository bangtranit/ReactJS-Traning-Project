import React, { Component } from 'react';
import "./App.css"
import ColorPicker from "./components/ColorPicker";
import Reset from "./components/Reset";
import Result from "./components/Result";
import SizeSetting from "./components/SizeSetting";

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            color : 'red',
            font : 16
        }
    }
    onSetColor = (params) =>{
        console.log(params);
        this.setState({
            color : params
        });
    }
    onChangeSize = (params) =>{
        console.log(params);
        if (this.state.font + params >= 8 && this.state.font + params <= 36) {
            this.setState({
                font : this.state.font + params
            });
        }
    }
    onReset = (params) => {
        console.log(params);
        if (params == true) {
            this.setState({
                color : 'red',
                font : 16
            });
        }
    }
    render() {
        return (
            <div className="container" id="mt-30">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <ColorPicker 
                            color={this.state.color} onReceiverColor= {this.onSetColor}
                        />
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <SizeSetting 
                            font={this.state.font}
                            onChangeSize = {this.onChangeSize}
                        />
                        <Reset 
                            onReset = {this.onReset}
                        />
                    </div>
                </div>
                <div className="row">
                    <Result 
                        color = {this.state.color}
                        font = {this.state.font}
                    />
                </div>
            </div>
        );
    }
}

export default App;
