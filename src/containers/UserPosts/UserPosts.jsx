import React from 'react';

import Post from '../../components/Post';

import './UserPosts.scss';

const UserPosts = ({ posts, userInfo }) => (
  <div className="container">
    <section className="user-posts" data-testid="user-posts">
      {posts.map((post) => <Post postInfo={post} userInfo={userInfo} teaser={true} key={post.id} />)}
    </section>
    
  </div>
);

export default UserPosts;
