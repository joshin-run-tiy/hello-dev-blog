import React, { Component } from 'react'
import Format from './Format.js'

class Blog extends Component {

  render() {
    const postsArr = this.props.posts;
    // const found = this.props.posts.posts[1].tags[1];
    // console.log('postsArr from Blog.js', postsArr);

    return (
      <div className="screen blog">
        <p className="main-title">Blog Posts</p>
          <div className="blog-container">
            {
              postsArr.map((p, i) => (
              // console.log('label p', p),
              // console.log('label i', i,),
              // console.log('label postsArr in .map', postsArr),
              <Format key={i} post={p} />
            ))
            }
          </div>
      </div>
    )
  }
}

module.exports = Blog
