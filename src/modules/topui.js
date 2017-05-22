import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

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
				<Grid>
					<Row>
						<Col xs={7}>
							<div className="input-group" id="chips-group">
								<span
									className="input-group-addon"
									id="chips-label"
								>
									Chips:
								</span>
								<input
									type="text"
									maxLength="8"
									className="form-control"
									placeholder="seed"
									id="seed-input"
									aria-describedby="chips-label"
									value={this.props.chips}
									disabled
								/>
							</div>
						</Col>
						<Col xs={5}>
							<Button bsClass="btn-primary" onClick={this.props.dealHandler}>Deal</Button>
						</Col>
					</Row>
				</Grid>
			);
		} else {
			return (
				<Grid>
					<Row>
						<Col xs={7}>
							<div className="input-group" id="chips-group">
								<span
									className="input-group-addon"
									id="chips-label"
								>
									Chips:
								</span>
								<input
									type="text"
									maxLength="8"
									className="form-control"
									placeholder="seed"
									id="seed-input"
									aria-describedby="chips-label"
									value={this.props.chips}
									disabled
								/>
							</div>
						</Col>
						<Col xs={5}>
							<Button bsClass="btn-primary" onClick={this.props.newGameHandler}>New Game</Button>
						</Col>
					</Row>
				</Grid>
			);
		}
	}
}

export default TopUI;