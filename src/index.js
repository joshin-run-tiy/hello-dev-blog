import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.css';
import Sidebar from './components/Sidebar'
import Main from './components/Main'


class App extends React.Component {

  render() {
    return (
      <div className="app">
        <div id="home" className="app-wrapper">
          <div className="app-nav-menu">
            <ul id="menu">
              <li><a href="#home">Home</a></li>
              <li onClick={() => {this.updateScreen(1)}}>Blog</li>
              <li onClick={(event) => {this.updateScreen(2)}}>Links</li>
              <li onClick={() => this.updateScreen(3)}>About</li>
            </ul>
          </div>
          <div className="app-header">
            <img id="header" src="./img/hello-dev-header-full-thin.jpg" alt="Hello Dev" />
          </div>
          <div className="app-main"></div>
            <Sidebar />
            <Main />
          </div>
        </div>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
