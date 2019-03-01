import React, { PureComponent } from "react";
import "./App.css";
import Post from "./components/Post";
import Form from "./components/Form";
import getPosts from "./resources/getPosts";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: false
    };
  }

  handleRequest = (options, interval) => {
    this.setState({ loading: true });
    getPosts(options).then(res =>
      this.setState({ posts: res, loading: false })
    );
    if (this.fetchInterval) {
      clearInterval(this.fetchInterval);
    }
    this.fetchInterval = setInterval(
      () => getPosts(options).then(res => this.setState({ posts: res })),
      parseInt(interval.value)
    );
  };

  componentDidMount() {
    clearInterval(this.fetchInterval);
  }

  render() {
    let posts;
    if (this.state.posts.length) {
      posts = this.state.posts.map(data => <Post key={data.id} {...data} />);
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1>Social Feed Widget</h1>
        </header>
        <Form handleRequest={this.handleRequest} />
        {this.state.loading ? <span>Loading...</span> : posts}
      </div>
    );
  }
}

export default App;
