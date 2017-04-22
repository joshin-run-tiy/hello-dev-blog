import React, { Component } from 'react'

class Sidebar extends Component {

  render() {
    return (
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
    )
  }

}

module.exports = Sidebar
