import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./common/Header";
import HomePage from "./components/HomePage"
import AboutPage from './components/AboutPage';
import CoursePage from "./components/CoursePage"


export default class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Header />
              <Route exact path='/' component={HomePage} />
              <Route exact path='/about' component={AboutPage} />
              <Route exact path='/courses' component={CoursePage} />
            
          </div>
        </Router>
    )
  }
}
