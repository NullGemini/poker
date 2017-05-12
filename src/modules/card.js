import React, { Component } from 'react';

class Card extends Component {

	constructor(props) {
		//index
		//suit
		//Rank
		//hold
		//toggleHold
		super(); 
	}

	render() {
		let displaySuit = "";
		if (this.props.suit === "diams")
			displaySuit = "♦";
		if (this.props.suit === "clubs")
			displaySuit = "♣";
		if (this.props.suit === "hearts")
			displaySuit = "♥";
		if (this.props.suit === "spades")
			displaySuit = "♠";

		let displayRank = this.props.rank.toUpperCase();

		return (
			<div className={"card suit-" + this.props.rank + " " + this.props.suit} onClick={this.props.toggleHold}>
				<span className="rank">{displayRank}</span>
				<span className="suit">{displaySuit}</span>
				<span className="hold">{this.props.hold?"HELD":" "}</span>
			</div>
		);
	}
}

export default Card;
