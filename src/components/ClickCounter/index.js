import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {
    count: 0,
  }

  onIncrementCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked
          <br />
          <span className="count-number">{count}</span> times
        </h1>
        <p className="text">Click the button to increase the count!</p>
        <button
          onClick={this.onIncrementCount}
          className="button"
          type="button"
        >
          Click Me !
        </button>
      </div>
    )
  }
}

export default ClickCounter
