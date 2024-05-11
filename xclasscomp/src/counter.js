import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  Increment = () => {
    this.setState((prevstate) => ({ count: prevstate.count + 1 }));
  };

  Decrement = () => {
    this.setState((prevstate) => ({ count: prevstate.count - 1 }));
  };

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button style={{ margin: "10px" }} onClick={this.Increment}>
          Increment
        </button>
        <button onClick={this.Decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
