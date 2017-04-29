import React, { Component } from 'react'
import Posts from './Posts'
import Format from './Format'

class Blog extends Component {

  render() {
    const posts = this.props.posts
    console.log('posts: Blog.js', posts);
    return (
      <div className="screen blog">
        <p className="main-title">Blog Posts</p>
        {
          posts.map((p, i) => (
            <Format key={i} post={p}/>
          ))
        }
      </div>
    )
  }

}

module.exports = Blog
