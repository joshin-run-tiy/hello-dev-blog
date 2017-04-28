import React, { Component } from 'react'

class Post extends Component {

  render() {
    return (
      <div className="screen post">
        <p className="main-title">New Post</p>
        <form>
          <fieldset>
            <legend>Post</legend>
            <div>
              <label>Title:  </label>
              <input id="post-title" type="text" placeholder=""/>
            </div>
            <label>Post Contents: </label>
            <p>
              <textarea id="post-contents" rows="25" cols="100"></textarea>
            </p>
            <div>
              <label>Tags:  </label>
              <input id="tags" type="text" placeholder=""/>
            </div>
            <input id="submit" name="submit" type="submit" value="Submit" />
          </fieldset>
        </form>
      </div>
    )
  }

}

module.exports = Post
