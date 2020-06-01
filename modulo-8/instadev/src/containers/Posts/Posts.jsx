import React from 'react';

import Post from '../../components/Post';

const Posts = ({ posts, getUserHandler }) => (
  <div className="container" data-testid="posts">
    <section className="feed">
      {posts.length > 0 && posts.map(post => 
        <Post 
          key={post.id}
          postInfo={post}
          userInfo={getUserHandler(post.UserId)}
        />
      )}
    </section>
  </div>
);

export default Posts;
