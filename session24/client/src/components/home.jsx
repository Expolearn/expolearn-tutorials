import { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.Increment = this.Increment.bind(this);
  }

  Increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  Decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <p> {this.state.count}</p>
        <button onClick={this.Increment}> Increment </button>
        <button onClick={this.Decrement}> Decrement </button>
      </div>
    );
  }
}
