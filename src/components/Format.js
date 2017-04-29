import React, { Component } from 'react'

class Format extends Component {

  render() {


    // const varFound = found
    const varFoundProps = this.props.found
    console.log('x');
    // console.log(found);
    console.log(this.props.found);
    // console.log(varFound);
    console.log(varFoundProps);
    // const post = this.props.posts.posts
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
      <p>{varFoundProps}</p>

    )
  }

}

module.exports = Format
