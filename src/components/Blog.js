import React, { Component } from 'react'

class Blog extends Component {

  render() {
    return (
      <div className="screen blog">
        <h1>Blog</h1>
        <h3>HTML</h3>
        <ul>
          <li>Description</li>
          <li>Content</li>
          <li>Wrap Up</li>
          <p>Lorem ipsum...</p>
        </ul>
        <h3>Tags:</h3>
        <input id="tags" type="text" placeholder=""/>
      </div>
    )
  }

}

module.exports = Blog
