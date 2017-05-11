import React, { Component } from 'react';
import Board from './board';
import logo from '../images/logo.svg';
import '../css/app.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to React</h2>
				</div>
				<Board />
			</div>
		);
	}
}

export default App;
