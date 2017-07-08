import React from 'react';
import {createSelector} from 'reselect'
import {connect} from 'react-redux';

let count = 0;

class Posts extends React.Component {
  render() {
    console.log(`Posts render ${++count}`);
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

const getListing = createSelector(
  state => state.postsById,
  state => state.usersById,
  state => state.postListing,
  (posts, users, listing) => listing.map(id => {
    const post = posts[id];
    return {...post, user: users[post.author]}
  })
);

const mapState = (state) => {
  return {posts: getListing(state)};
};

export default connect(mapState)(Posts);
