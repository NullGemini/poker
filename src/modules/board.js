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
			pointer: 0
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
					rank: this.state.ranks[y]
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
			tempPointer = tempPointer + 1;
		}
		this.setState({hand: tempHand});
		this.setState({pointer: tempPointer});
	}

	updateHand () {

	}


	//////// COMPONENT LIFECYCLE METHODS ////////

	componentWillMount() {
		this.buildDeck();
	}


	render() {
		const deck = [];
		for (let x = 0; x < this.state.deck.length; x++) {
			deck.push(
				<Card
					key={x}
					index={this.state.deck[x].index}
					suit={this.state.deck[x].suit}
					rank={this.state.deck[x].rank}
				/>
			);
		}
		return (
			<div id="board">
				<button>New Game</button>
				<button>Deal</button>
				<div>
					{deck}
				</div>
			</div>
		);
	}
}

export default Board;
