import React from "react";
import "./App.css";
import Writer from "./Writer";
import Post from "./Post";
import postStorage from "./PostStorage";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          author: "Alice",
          contents: "in wonderland",
          date: new Date().toString(),
        },
      ],
    };
  }

  componentDidMount() {
    postStorage.subscribe(this);
  }
  componentWillUnmount() {
    postStorage.unsubscribe(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>NonceN5</h1>
        </header>
        <div>
          <div>
            <Writer />
            <div>
              {
                Object.keys(this.state.posts).map(key =>
                  <Post key={key} post={this.state.posts[key]} />)
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
