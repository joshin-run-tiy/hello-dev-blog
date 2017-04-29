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
    const found = this.props.posts.posts[1].tags[1];
    console.log('drill down', this.props.posts.posts[0].tags[0]);
    return (
      <div className="screen blog">
        <p className="main-title">Blog Posts</p>
          <Format found={found} />
          <p>Above line from Format.js (this line from Blog.js)</p>
          <p>This line from Blog.js</p>
      </div>
    )
  }

}

module.exports = Blog
