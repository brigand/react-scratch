import React from 'react';
import RedditSinglePost from './RedditSinglePost';
import memoize from 'lodash/memoize';

export default class RedditPosts extends React.PureComponent {
  constructor(props) {
    super(props);
    this.getPost = memoize(post => this.renderItem(post));
  }
  render() {
    return (
      <div>
        {this.props.posts.map((post) => {
          return this.getPost(post.data);
        })}
      </div>
    );
  }

  renderItem(post) {
    return (
      <RedditSinglePost
        onClick={(post) => this.props.onSelect(post)}
        key={post.id}
        data={post}
      />
    );
  }
}
