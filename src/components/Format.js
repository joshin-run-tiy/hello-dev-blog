import React, { Component } from 'react'

class Format extends Component {

  render() {
    const post = this.props
    const tagsArr = post.post.tags
    // console.log('postArr from Format.js', post);

    return (
      <div>
        <p className="blog-date">{post.post.dateStamp.month} {post.post.dateStamp.day}, {post.post.dateStamp.year} -  {post.post.dateStamp.time}</p>
        <p className="blog-post-title">{post.post.title}</p>
        <p>{post.post.content}</p>
          <h3>Tags: {tagsArr[0]}, {tagsArr[1]}, {tagsArr[0]}</h3>
        </div>

    )
  }
}

module.exports = Format
