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

      <p>{varFoundProps}</p>

    )
  }

}

module.exports = Format
