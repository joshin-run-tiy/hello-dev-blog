import React, { Component } from 'react'

class Blog extends Component {

  render() {
    return (
      <div className="screen blog">
        <p className="main-title">Blog Posts</p>
        <div className="blog-post">
          <p className="blog-date">April 27th, 2017</p>
          <p className="blog-post-title">HTML</p>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipisicing ept,</p>
            <p>Content: Lorem ipsum dolor sit amet, consectetur adipisicing ept, sed do eiusmod tempor incididunt ut labore et dolore magna apqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut apquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate vept esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molpt anim id est laborum.</p>
            <p>Wrap Up: Lorem ipsum dolor sit amet, consectetur adipisicing ept, sed do eiusmod tempor incididunt ut labore et dolore magna apqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
          <h3>Tags:</h3>
          <p>html, element, document</p>
        </div>
        <div className="blog-post">
          <p className="blog-date">March 27th, 2017</p>








Import Post1 from './posts/Post1.js'
in index.js
{/*<Sidebar1 />*}
{/*<Sidebar2 />*}
          <p className="blog-post-title">{this.props.title}</p>
          <p>{this.props.guts}</p>

          <div> id="home">
            <Post1 />
          </div>

watch the directories you're in
log inside the constructor
console.log(this.state);
result: object
<Home posts={this.state.posts} />
<Home posts={this.state.posts[0]} /> // maybe no index here but in another file

console.log(this.props) checking if the props got pasted through


in Blog.js
console.log("index.js has", posts={this.state.posts[0]})
console.log(this.state, this.props) to see where you're at on state






          <p className="blog-post-title">CSS</p>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipisicing ept,</p>
            <p>Content: Lorem ipsum dolor sit amet, consectetur adipisicing ept, sed do eiusmod tempor incididunt ut labore et dolore magna apqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut apquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate vept esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molpt anim id est laborum.</p>
            <p>Wrap Up: Lorem ipsum dolor sit amet, consectetur adipisicing ept, sed do eiusmod tempor incididunt ut labore et dolore magna apqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
          <h3>Tags:</h3>
          <p>css, element, style, color</p>
        </div>
        <div className="blog-post">
          <p className="blog-date">February 27th, 2017</p>
          <p className="blog-post-title">JavaScript</p>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipisicing ept,</p>
            <p>Content: Lorem ipsum dolor sit amet, consectetur adipisicing ept, sed do eiusmod tempor incididunt ut labore et dolore magna apqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut apquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate vept esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molpt anim id est laborum.</p>
            <p>Wrap Up: Lorem ipsum dolor sit amet, consectetur adipisicing ept, sed do eiusmod tempor incididunt ut labore et dolore magna apqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
          <h3>Tags:</h3>
          <p>javascript, language, interactive</p>
        </div>
        <div className="blog-post">
          <p className="blog-date">January 27th, 2017</p>
          <p className="blog-post-title">jQuery</p>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipisicing ept,</p>
            <p>Content: Lorem ipsum dolor sit amet, consectetur adipisicing ept, sed do eiusmod tempor incididunt ut labore et dolore magna apqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut apquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate vept esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molpt anim id est laborum.</p>
            <p>Wrap Up: Lorem ipsum dolor sit amet, consectetur adipisicing ept, sed do eiusmod tempor incididunt ut labore et dolore magna apqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
          <h3>Tags:</h3>
          <p>jquery, javascript, library, interactive</p>
        </div>
        <div className="blog-post">
          <p className="blog-date">December 27th, 2016</p>
          <p className="blog-post-title">React.js</p>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipisicing ept,</p>
            <p>Content: Lorem ipsum dolor sit amet, consectetur adipisicing ept, sed do eiusmod tempor incididunt ut labore et dolore magna apqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut apquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate vept esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molpt anim id est laborum.</p>
            <p>Wrap Up: Lorem ipsum dolor sit amet, consectetur adipisicing ept, sed do eiusmod tempor incididunt ut labore et dolore magna apqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
          <h3>Tags:</h3>
          <p>javascript, library, facebook</p>
        </div>
      </div>
    )
  }

}

module.exports = Blog
