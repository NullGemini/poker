import React, { Component } from 'react';

class TopUI extends Component {

	constructor(props) {
		super();
		//chips
		//deal
		//dealHandler
		//newGameHandler
	}

	render() {
		if (this.props.deal){
			return (
				<div>
					<div>Chips: {this.props.chips}</div>
					<button onClick={this.props.dealHandler}>Deal</button>
				</div>
			);
		} else {
			return (
				<div>
					<div>Chips: {this.props.chips}</div>
					<button onClick={this.props.newGameHandler}>New Game</button>
				</div>
			);
		}
	}
}

export default TopUI;