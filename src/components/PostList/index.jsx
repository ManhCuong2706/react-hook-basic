import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
  posts: PropTypes.array,
};

PostList.defaultProps = {
  posts: PropTypes.array,
};

function PostList({ posts }) {
  return (
    <ul className='post-list'>
      {posts.map((post, i) => (
        <li key={i}>{post.title}</li>
      ))}
    </ul>
  );
}

export default PostList;
