import React, { Component } from 'react'
import Posts from './Posts'
import Format from './Format'

class Blog extends Component {

  render() {
    // what does this mean?
      // I passed in 'this.state.posts'
      // now that is represented by 'this.props.posts' it seems?!?
    // const posts = this.props.posts;
    console.log('from Blog.js: const posts', this.props.posts.posts[1].tags[1]);
    // console.log('drill down', this.props.posts[0][1].tags[1]);
    return (
      <div className="screen blog">
        <p className="main-title">Blog Posts</p>
      </div>
    )
  }

}

module.exports = Blog
