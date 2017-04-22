import React, { Component } from 'react'

class Post extends Component {

  render() {

    return (
      <div className="screen post">
        <h1>New Post</h1>

        <input id="motto" class="options motto-input" maxlength="50" minlength="1" type="text" name="motto" placeholder=" enter your text here"></input>
        <input id="createButton" class="options button" name="submit" type="submit" value="Create new shirt entry" />
        <label for="motto">Enter the motto to be displayed on your shirt (limit 50 characters):</label>
       <input id="motto" class="options motto-input" maxlength="50" minlength="1" type="text" name="motto" placeholder=" enter your text here"></input>
       <input id="createButton" class="options button" name="submit" type="submit" value="Create new shirt entry" />

     <div id="removeShirt">
       <label for="id">Enter ID to be removed:</label>


       <input id="id" class="options" maxlength="3" minlength="1" type="text" name="id" placeholder=" enter your text here"></input>

       <input id="removeButton" class="options button" name="submit" type="submit" value="Remove shirt entry" />
       </div>
    </div>
    )
  }

}

module.exports = Post
