import React, { Component } from 'react'

class App extends Component {

  state = {
    count: 0
  }

  handleIncrementCount = () => {
    this.setState({ count: this.state.count + 1 })
  }

  // write a function that moves count down by 1

  // write a function that moves count up by multiplying count by 2

  // write a function that moves count down by dividing count by 2
  
  render () {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleIncrementCount}>Click Me</button>
      </div>
    )
  }
}

export default App
