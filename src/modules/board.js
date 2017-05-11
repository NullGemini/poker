import React, { Component } from 'react';
import Card from './card';

class Board extends Component {
	constructor(props) {
		super(props);

		this.state = {
			suits: ["diamonds", "clubs", "hearts", "spades"],
			ranks: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"],
			deck: [],
			hand: [],
			turn: 0,
			pointer: 0,
			chips: 200
		};
	}


	//////// CARD METHODS ////////

	buildDeck () {
		const tempDeck = [];
		let count = 0;

		for ( let x = 0; x < this.state.suits.length; x++) {
			for ( let y = 0; y < this.state.ranks.length; y ++) {
				tempDeck.push({
					index: count,
					suit: this.state.suits[x],
					rank: this.state.ranks[y],
					hold: false
				});
				count =+ count;
			}
		}

		this.setState({deck: tempDeck});
	}

	shuffleDeck () {
		const tempDeck = this.state.deck;

		for (let x = 0; x < tempDeck.length; x++) {
			const tempCard = tempDeck[x];
			const newPos = Math.floor((Math.random() * 52)) ;

			tempDeck[x] = tempDeck[newPos];
			tempDeck[newPos] = tempCard;
		}

		this.setState({deck: tempDeck});
	}

	fillHand () {
		const tempHand = [];
		let tempPointer = this.state.pointer;

		for (let x = 0; x < 5; x++) {
			tempHand.push(this.state.deck[tempPointer]);
			tempPointer += 1;
		}

		this.setState({hand: tempHand});
		this.setState({pointer: tempPointer});
	}

	updateHand () {
		let tempHand = this.state.hand;
		let tempPointer = this.state.pointer;
		console.log(tempHand[0]);

		for (let x = 0; x < tempHand.length; x++) {
			if (!tempHand[x].hold) {
				//console.log(this.state.deck[tempPointer]);
				tempHand[x] = this.state.deck[tempPointer];
				tempPointer += 1;
			}
		}
		console.log(tempHand[0]);

		this.setState({hand: tempHand});
		this.setState({pointer: tempPointer});
	}

	clearHand () {
		this.setState({hand: []});
	}


	//////// GAME SPECIFIC METHODS ////////

	resetBoard () {
		this.shuffleDeck();
		this.clearHand();
		this.setState({
			pointer: 0,
			turn: 0
		});
	}


	//////// HANDLER METHODS ////////

	newGameHandler() {
		this.resetBoard();
		this.fillHand();
	}

	dealHandler() {
		this.updateHand();
	}

	toggleHoldHandler(x) {
		console.log(x);
	}


	//////// COMPONENT LIFECYCLE METHODS ////////

	componentWillMount() {
		this.buildDeck();
	}


	render() {
		const hand = [];
		for (let x = 0; x < this.state.hand.length; x++) {
			hand.push(
				<Card
					key={x}
					index={this.state.deck[x].index}
					suit={this.state.deck[x].suit}
					rank={this.state.deck[x].rank}
					hold={this.state.deck[x].hold}
					toggleHold={this.toggleHoldHandler.bind(this, x)}
				/>
			);
		}
		return (
			<div id="board">
				<button onClick={this.newGameHandler.bind(this)}>New Game</button>
				<button onClick={this.dealHandler.bind(this)}>Deal</button>
				<div>
					{hand}
				</div>
			</div>
		);
	}
}

export default Board;
