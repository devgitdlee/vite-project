import React from 'react';
import './PostList.css';

function PostList({ posts }) {
  
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </li>
      ))}
    </ul>
  );
}

export default PostList;
