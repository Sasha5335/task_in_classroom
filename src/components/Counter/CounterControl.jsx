import './style.css'
import { Component } from 'react'
import Counter from './Counter'


class CounterControl extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',

		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	render() {
		const { value } = this.state;

		return (
			<>
				<Counter step={value} />
				<input type="number" value={this.state.value} onChange={this.handleChange} />
			</>
		)
	}
}

export default CounterControl;

