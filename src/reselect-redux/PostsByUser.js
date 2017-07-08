import React from 'react';
import {createSelector} from 'reselect'
import {connect} from 'react-redux';

let count = 0;

class Posts extends React.Component {
  render() {
    console.log(`PostsByUser render ${++count}`);
    return (
      <div>
        <h3>Posts</h3>
        <ul>
          {this.props.posts.map(x =>
            <li key={x.id}>
              {`${x.title} - ${x.user.first} ${x.user.last}`}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

const makeGetPosts = () => createSelector(
  (state, props) => props.user,
  (state) => state.postsById,
  (state) => state.usersById,
  (state) => state.postListing,
  (userId, posts, users, listing) => listing
    .filter(id => posts[id].author === userId)
    .map(id => {
      const post = posts[id];
      return {...post, user: users[post.author]}
    }),
);

const mapState = () => {
  const getPosts = makeGetPosts();
  return (state, ownProps) => {
    return {posts: getPosts(state, ownProps)};
  };
};

export default connect(mapState)(Posts);
