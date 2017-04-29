import React, { Component } from 'react'

class Format extends Component {

  render() {
    console.log('x');
    const post = this.props.post
    return (
      <div>
        <h1>{post.date} {post.title} </h1>
        <div className="styling-for-the-post">
          <p>
            {post.content}
          </p>
          <p>
            tags: {post.tags}
          </p>
        </div>
      </div>
    )
  }

}

module.exports = Format
