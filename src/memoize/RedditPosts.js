import React from 'react';
import RedditSinglePost from './RedditSinglePost';

export default class RedditPosts extends React.Component {
  render() {
    return (
      <div>
        {this.props.posts.map((post) => {
          return this.renderItem(post.data);
        })}
      </div>
    );
  }

  renderItem(post) {
    return (
      <RedditSinglePost
        onClick={() => this.props.onSelect(post)}
        key={post.id}
        data={post}
      />
    );
  }
}
