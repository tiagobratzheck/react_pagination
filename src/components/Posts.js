import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return (
      <div class="spinner-border text-info" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    )
  }
  return (
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">USERID</th>
          <th scope="col">TITLE</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(post => (
          <tr>
            <td scope="row" key={post.id}>{post.id}</td>
            <td>{post.userId}</td>
            <td>{post.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Posts;
