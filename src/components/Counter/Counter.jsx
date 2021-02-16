import { Component } from 'react'
import './style.css'


class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }


  onClickUp = () => {
    this.setState(({ counter }, { step }) => {
      return {
        counter: counter + Number(step),
      }
    })
  };

  onClickDown = () => {
    this.setState(({ counter }, { step }) => {
      return {
        counter: counter - Number(step),
      }
    })
  };

  render() {
    const { counter } = this.state;
    const { step } = this.props;



    return (
      <>
        <div>{counter}</div>
        <div>За один клик добавлено: {step} значение</div>
        <button onClick={this.onClickDown}>Click -</button>
        <button onClick={this.onClickUp}>Click +</button>
        <button onClick={this.handleStartStop}>Set timeout</button>
      </>
    )
  }
}

export default Counter;


