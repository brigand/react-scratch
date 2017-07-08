import React from 'react';
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

const mapState = (state) => {
  const byId = state.postsById;
  const usersById = state.usersById;
  const listing = state.postListing;
  return {
    posts: listing.map(id => {
      const post = byId[id];
      return {...post, user: usersById[post.author]}
    }),
  };
};

export default connect(mapState)(Posts);
