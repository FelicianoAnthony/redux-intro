import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  state = { count: 0 }

  increment = () => {
    this.props.dispatch({type: 'INCREMENT'})
  }

  decrement = () => {
    this.props.dispatch({type: 'DECREMENT'})
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span> {/* notice props and not state here -> receives injected count from from index.js using connect import?*/}
          <button onClick={this.increment}>+</button>
        </div>
      </div>

    )
  }
}


// Add this function:
function mapStateToProps(state) {
  return {
    count: state.count
  };
}


export default connect(mapStateToProps)(Counter);