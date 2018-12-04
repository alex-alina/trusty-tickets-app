import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import EventsListContainer from './components/EventsListContainer';
// import LoginPage from './components/login/LoginPage'
// import SignupPage from './components/signup/SignupPage'
// import LogoutPage from './components/logout/LogoutPage'

class App extends Component {
  render() {
    return (
<Router>
        <div>
          {/* <nav>
            <TopBar />
          </nav> */}
          <main style={{marginTop:75}}>
            {/* <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/signup" component={SignupPage} /> */}
            <Route exact path="/events" component={EventsListContainer} />
            <Route exact path="/" render={ () => <Redirect to="/events" /> } />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
