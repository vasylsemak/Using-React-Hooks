import { Component } from 'react'

export default class InputUseStateClass extends Component {
  state = {
    inputText: '',
    historyList: []
  }

  handleChange = e => {
    this.setState(prevState => ({
      inputText: e.target.value,
      historyList: [...prevState.historyList, e.target.value]
    }))
  }

  render() {
    return (
      <>
        <input
          type='text'
          value={this.state.inputText}
          onChange={this.handleChange}
          placeholder='Enter text here'
        />
        <hr/><br/>
        <ul>
          {this.state.historyList.map((item, idx) =>
            <li key={idx}>{item}</li>
          )}
        </ul>
      </>
    )
  }
}

// before ES6 classes

// constructor() {
//   super()
//   this.state = {
//     inputText: '',
//     historyList: []
//   }
//   this.handleChange = this.handleChange.bind(this)
// }

// handleChange(e) {
//   const val = e.target.value
//   this.setState(prevState => {
//     return {
//       inputText: val,
//       historyList: [...prevState.historyList, val]
//     }
//   })
// }
