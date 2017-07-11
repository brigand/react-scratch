import React from 'react';
import './RedditSinglePost.css';

export default class RedditSinglePost extends React.Component {
  render() {
    const {data} = this.props;

    return (
      <div className="RSP" onClick={this.props.onClick}>
        <h3 className="RSP__Heading">
          <div className="RSP__Icon" style={{background: this.randomIcon()}} />
          {data.title}
        </h3>
        {data.selftext}
      </div>
    );
  }

  randomIcon() {
    const hue = Math.floor(Math.random() * 255);
    return `hsl(${hue}, 100%, 50%)`;
  }

  renderItem(post) {
    return <RedditSinglePost data={post} key={post.id} />;
  }
}
