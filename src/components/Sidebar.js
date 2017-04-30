import React, { Component } from 'react'

class Sidebar extends Component {

  render() {
    
    function filter(target) {
      console.log('target', target);
    }

    return (
      <div className="app-aside-nav">
        <div className="para">
          <p>Archive</p>
            <ul>
              <li className="years" onClick={() => {filter(2017)}}>2017</li>
              <ul className="months">
                <li onClick={() => {filter('April')}}>April</li>
                <li onClick={() => {filter('March')}}>March</li>
                <li onClick={() => {filter('February')}}>February</li>
                <li onClick={() => {filter('January')}}>January</li>
              </ul>
              <li className="years" onClick={() => {filter(2016)}}>2016</li>
              <ul className="months">
                <li onClick={() => {filter('December')}}>December</li>
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
