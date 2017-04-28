import React, { Component } from 'react'

class Archive extends Component {



  render() {
    return (
      <div className="screen post">
        <h1>New Post</h1>
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

module.exports = Archive
