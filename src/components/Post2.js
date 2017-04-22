import React, { Component } from 'react'

class Post2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      post: '',
      tags: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
   alert('Submitted: nothing' + this.state.title + this.state.post + this.state.tags);
   event.preventDefault();
 }

  handleChange(event) {
    this.setState({name: event.target.value});
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleInputChange} />
        </label><br />
        <label>
          Post:
        </label><br />
        <textarea name="post" value={this.state.post} onChange={this.handleChange} />
        <label>
          Tags:
          <input
            name="tags"
            type="text"
            value={this.state.tags}
            onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

module.exports = Post2
