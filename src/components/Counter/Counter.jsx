import { Component } from 'react'
import './style.css'


class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
    this.isButtonDisabled = true;
  }

  incrementUp = () => {
    this.setState(({ counter }, { step }) => {
      this.isButtonDisabled = false;
      return { counter: counter + Number(step) }
    })
  };

  incrementDown = () => {
    this.setState(({ counter }, { step }) => {
      this.isButtonDisabled = false;
      return { counter: counter - Number(step) }
    })
  };

  onClickUp = () => {
    const { value } = this.props;
    if (this.isButtonDisabled) {
      this.incrementUp();
      setTimeout(() => { this.isButtonDisabled = true }, Number(value * 1000));
    }
  };

  onClickDown = () => {
    const { value } = this.props;
    if (this.isButtonDisabled) {
      this.incrementDown();
      setTimeout(() => { this.isButtonDisabled = true }, Number(value * 1000));
    }
  };

  render() {
    const { counter } = this.state;
    const { step } = this.props;

    return (
      <>
        <div>{counter}</div>
        <div>За один клик добавлено: {step} значение</div>
        <br />
        <button onClick={this.onClickDown}>Click -</button>
        <button onClick={this.onClickUp}>Click +</button>
        <br />

      </>

    )
  }
}

export default Counter;


