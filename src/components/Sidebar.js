import React, { Component } from 'react'
import Posts from './Posts'

class Sidebar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: Posts
    }
  }

  render() {
    const postsSBArr = this.state.posts.posts;
    console.log('posts passed now logged from Sidebar.js', postsSBArr);
    // <li ('April'),
    return (
      <div className="app-aside-nav">
        <div className="para">
          <p>Archive</p>
            <ul>
              <li>2017</li>
              <ul className="months">
                <li>April</li>
                <li>March</li>
                <li>February</li>
                <li>January</li>
              </ul>
              <li>2016</li>
              <ul className="months">
                <li>December</li>
              </ul>
            </ul>
          <p>Tags</p>
            <ul className="tags">
              <li><a href="#">html</a></li>
              <li><a href="#">element</a></li>
              <li><a href="#">document</a></li>
              <li><a href="#">css</a></li>
              <li><a href="#">style</a></li>
              <li><a href="#">color</a></li>
              <li><a href="#">element</a></li>
              <li><a href="#">javascript</a></li>
              <li><a href="#">language</a></li>
              <li><a href="#">interactive</a></li>
              <li><a href="#">jquery</a></li>
              <li><a href="#">library</a></li>
              <li><a href="#">react</a></li>
              <li><a href="#">facebook</a></li>
            </ul>
        </div>
      </div>
    )
  }

}

module.exports = Sidebar
