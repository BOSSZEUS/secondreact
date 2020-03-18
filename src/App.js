import React, { Component } from 'react'
// import NumberButton from './components/NumberButton'

class App extends Component {

  state = {
    username: '',
    email: '',
    password: '',
    uname: '',
    em: '',
    pwd: ''
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    this.setState({
      uname: this.state.username,
      em: this.state.email,
      pwd: this.state.password,
      username: '',
      email: '',
      password: ''
    })
  }

  render() {
    return (
      <>
        <form>
          <p>
            <label htmlFor="username">username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange} />
          </p>
          <p>
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange} />
          </p>
          <p>
            <label htmlFor="password">password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange} />
          </p>
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
        <div>
          <h1>{this.state.uname}</h1>
          <h2>{this.state.em}</h2>
          <h3>{this.state.pwd}</h3>
        </div>
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
