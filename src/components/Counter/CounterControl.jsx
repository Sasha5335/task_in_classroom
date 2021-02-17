import './style.css'
import { Component } from 'react'
import Counter from './Counter'


class CounterControl extends Component {
	constructor(props) {
		super(props);
		this.state = {
			step: '1',
			value: '1',

		}
		this.handleChange = this.handleChange.bind(this);
		this.autoClick = this.autoClick.bind(this);
	}

	handleChange(event) {
		this.setState({ step: event.target.value });
	}

	autoClick(event) {
		this.setState({ value: event.target.value });

	}

	render() {
		const { step, value } = this.state;

		return (
			<>
				<div>
					<input type="number" step={this.state.value} onChange={this.handleChange} />шаг
				</div>
				<Counter step={step} value={value} />
				<br />
				<input type="number" value={this.state.value} onChange={this.autoClick} />частота нажатий
			</>
		)
	}
}

export default CounterControl;

