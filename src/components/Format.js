import React, { Component } from 'react'

class Format extends Component {

  render() {
    const post = this.props
    // console.log('postArr from Format.js', post);

    return (
      <div>
        <p>date/title: {post.post.date}</p>
        <p>{post.post.title}</p>
        <div className="styling-for-the-post">
          <p>
            content: {post.post.content}
          </p>
          <p>
            tags: {post.post.tags}
          </p>
        </div>
      </div>
    )
  }
}

module.exports = Format
