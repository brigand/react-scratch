import React from 'react';
import RedditPosts from './RedditPosts';
import data from './reddit.json';
import './index.css';

const posts = data.data.children;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      post: null,
      posts,
      newPost: '',
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(post) {
    this.setState({post});
  }

  tick() {
    this.setState({count: this.state.count + 1});
  }

  componentDidMount() {
    setInterval(() => this.tick(), 200);
  }

  render() {
    return (
      <div>
        <h1>Memoize React {this.state.count}</h1>
        {this.renderSingle()}
        {this.renderInput()}
        <RedditPosts
          onSelect={this.handleSelect}
          posts={this.state.posts}
        />
      </div>
    );
  }

  renderSingle() {
    const {post} = this.state;
    if (!post) return null;

    if (post.preview) {
      return post.preview.images.map((img, i) => <img alt={post.tile} src={img.source.url} key={i}/>);
    }

    return (
      <h1 style={{color: 'hotpink'}}>{post.title}</h1>
    );
  }

  renderInput() {
    return (
      <form style={{marginBottom: '1em'}} onSubmit={(e) => {
        e.preventDefault();
        this.setState({
          newPost: '',
          posts: [
            {
              data: {
                id: Math.random(),
                title: this.state.newPost,
              }
            },
            ...this.state.posts,
          ]
        })
      }}>
        <input
          type="text"
          value={this.state.newPost}
          placeholder="New post..."
          onChange={e => this.setState({newPost: e.target.value})}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default () => <App />;
