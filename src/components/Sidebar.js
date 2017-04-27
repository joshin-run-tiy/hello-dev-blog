import React, { Component } from 'react'

class Sidebar extends Component {

  render() {
    return (
      <div className="app-aside-nav">
        <div className="para">
          <p>Archive</p>
            <ul>
              <li><a href="#">April 2017</a></li>
              <li><a href="#">March 2017</a></li>
              <li><a href="#">February 2017</a></li>
              <li><a href="#">January 2017</a></li>
              <li><a href="#">December 2017</a></li>
            </ul>
          <p>Tags</p>
        </div>
      </div>
    )
  }

}

module.exports = Sidebar
