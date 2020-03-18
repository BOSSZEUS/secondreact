import React, { Component } from 'react'
// import NumberButton from './components/NumberButton'

class App extends Component {

  state = {
    text: '',
    message: ''
  }

  handleInputChange = event => {
    this.setState({ text: event.target.value })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    console.log(this.state.text)
    this.setState({ text: '', message: this.state.text })
  }

  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <form>
          <p>
            <label htmlFor="text">text</label>
            <input
              type="text"
              name="text"
              id="text"
              value={this.state.text}
              onChange={this.handleInputChange} />
          </p>
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </>
    )
  }
}
// class App extends Component {

//   state = {
//     count: 0
//   }

//   handleIncrementCount = value => {
//     this.setState({ count: this.state.count + value })
//   }

//   render() {
//     return (
//       <div>
//         <h1>Count: {this.state.count}</h1>
//         <NumberButton
//           number={5} 
//           handleIncrementCount={this.handleIncrementCount} />
//         <NumberButton
//           number={7} 
//           handleIncrementCount={this.handleIncrementCount} />
//         <NumberButton
//           number={12} 
//           handleIncrementCount={this.handleIncrementCount} />
//       </div>
//     )
//   }
// }

export default App
