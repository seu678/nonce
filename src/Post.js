import React, { Component } from "react";

class Post extends Component {
  render() {
    return (
      <div>
        <p>{this.props.post.author}</p>
        <p>{this.props.post.contents}</p>
        <p>{this.props.post.date}</p>
        <hr />
      </div>
    );
  }
}

export default Post;
