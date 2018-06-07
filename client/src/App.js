import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LoginPage from './components/login/LoginPage'
import SignupPage from './components/signup/SignupPage'
import LogoutPage from './components/logout/LogoutPage'

//Styling
import TopBar from './components/layout/TopBar'

class App extends PureComponent {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <TopBar />
          </nav>
          <main style={{marginTop:75}}>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/" render={ () => <Redirect to="/login" /> } />
            
          </main>
        </div>
      </Router>
    )
  }
}
export default App
