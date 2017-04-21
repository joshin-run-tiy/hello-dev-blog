import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.css';
import Blog from './components/Blog'
import Links from './components/Links'
import About from './components/About'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      screenIndex: 1
    }
  }

  updateScreen(newScreenIndex) {
    this.setState({screenIndex: newScreenIndex})
  }

  render() {
    let ActiveScreen

    if(this.state.screenIndex === 1) {
      ActiveScreen = <Blog />
    }

    if(this.state.screenIndex === 2) {
      ActiveScreen = <Links />
    }

    if(this.state.screenIndex === 3) {
      ActiveScreen = <About  />
    }


    return (
      <div className="app">
        <div id="home" className="app-wrapper">
          <div className="app-nav-menu">
            <ul id="menu">
              <li><a href="#home">Home</a></li>
              <li onClick={(event) => { this.updateScreen(1)}}>Blog</li>
              <li onClick={(event) => { this.updateScreen(2)}}>Links</li>
              <li  onClick={(event) => { this.updateScreen(3)}}>About</li>
            </ul>
          </div>
          <div className="app-header">
            <img id="header" src="./img/hello-dev-header-full-thin.jpg" />
          </div>
          <div className="app-main"></div>
            <div className="app-aside-nav">
              <div className="para">
                <p>Archive</p>
                  <ul>
                    <li>April 2017</li>
                    <li>March 2017</li>
                    <li>February 2017</li>
                    <li>January 2017</li>
                    <li>December 2016</li>
                  </ul>
                <p>Tags</p>
              </div>
            </div>
            <div className="main-content">
              {ActiveScreen}
            </div>
          </div>
        </div>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
