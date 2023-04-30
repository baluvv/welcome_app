import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: 'Subscribe'}

  checkSubscribe = () => {
    this.setState(prevState => {
      if (prevState.isSubscribed === 'Subscribe') {
        return {isSubscribed: 'Subscribed'}
      }
      return {isSubscribed: 'Subscribe'}
    })
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="wish">Thankyou! Happy Learning</p>
        <button className="button" onClick={this.checkSubscribe}>
          {isSubscribed}
        </button>
      </div>
    )
  }
}

export default Welcome
