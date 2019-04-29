import React, { Component } from "react";
import { connect } from "react-redux";

import { increment, decrement, reset } from "../../redux/Counter/actions";

interface Props {
  dispatch: any;
  count: number;
}

class Counter extends Component<Props, {}> {
  increment = () => {
    this.props.dispatch(increment());
  };

  decrement = () => {
    this.props.dispatch(decrement());
  };

  reset = () => {
    this.props.dispatch(reset());
  };

  render() {
    const { count } = this.props;
    return (
      <div>
        <style jsx>{`
          div {
            padding: 0 0 20px 0;
          }
        `}</style>
        <h1>
          Count: <span>{count}</span>
        </h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

const mapStateToProps = ({ count }) => ({ count });
export default connect(mapStateToProps)(Counter);
