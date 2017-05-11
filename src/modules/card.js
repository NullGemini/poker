import React, { Component } from 'react';

class Card extends Component {

	constructor(props) {
		//index
		//suit
		//Rank
		super(); 
	}

	render() {
		return (
			<div className={"card " + this.props.suit + " " + this.props.rank}>
				<span>Suit: {this.props.suit}</span>
				<span>Rank: {this.props.rank}</span>
			</div>
		);
	}
}

export default Card;
