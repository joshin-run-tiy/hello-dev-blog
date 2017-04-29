import React, { Component } from 'react'

class Sidebar extends Component {

  render() {
    return (
      <div className="app-aside-nav">
        <div className="para">
          <p>Archive</p>

              <ul>
                <li className="years"><a href="#">2017</a></li>
                <ul className="months">
                  <li><a href="#">April</a></li>
                  <li><a href="#">March</a></li>
                  <li><a href="#">February</a></li>
                  <li><a href="#">January</a></li>
                </ul>
                <li className="years"><a href="#">2016</a></li>
                <ul className="months">
                  <li><a href="#">December</a></li>
                </ul>
              </ul>
          <p>Tags</p>
            <ul className="tags">
              <li><a href="#">html</a></li>
              <li><a href="#">element</a></li>
              <li><a href="#">document</a></li>
              <li><a href="#">css</a></li>
              <li><a href="#">style</a></li>
              <li><a href="#">color</a></li>
              <li><a href="#">element</a></li>
              <li><a href="#">javascript</a></li>
              <li><a href="#">language</a></li>
              <li><a href="#">interactive</a></li>
              <li><a href="#">jquery</a></li>
              <li><a href="#">library</a></li>
              <li><a href="#">react</a></li>
              <li><a href="#">facebook</a></li>
            </ul>
        </div>
      </div>
    )
  }

}

module.exports = Sidebar
