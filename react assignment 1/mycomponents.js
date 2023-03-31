import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentDidUpdate() {
    console.log('Component updated');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }
  decrementCount() {
    this.setState({ count: this.state.count - 1 });
  }
  render() {
    return (
      <div>
        <center>
        <form>
        <h1>Count: {this.state.count}</h1>
        <button class = "ab" onClick={() => this.incrementCount()}>Increment</button>
        <br></br>
        <button class = "bc" onClick={() => this.decrementCount()}>Decrement</button>
        </form>
        </center>
      </div>
    );
  }
}

export default MyComponent;
