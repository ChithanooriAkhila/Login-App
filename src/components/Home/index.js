// Write your code here
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLoggedIn: false}

  loginClicked = () => {
    this.setState({isLoggedIn: true})
  }

  logoutClicked = () => {
    this.setState({isLoggedIn: false})
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div>
        <div>
          <Message isLoggedIn={isLoggedIn} />
          {!isLoggedIn ? (
            <Login isClicked={this.loginClicked} />
          ) : (
            <Logout isClicked={this.logoutClicked} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
