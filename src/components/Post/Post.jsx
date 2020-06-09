import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo, getUserHandler, teaser }) => {
  const [following, toggleFolowing] = useState(false);
  const [hasLiked, toggleLike] = useState(false);

  const {imageUrl, comments} = postInfo;
  const {avatar, name, username} = userInfo;

  const likedText = () => {
    switch(countLikes()) {
      case 0:
        return "";
      case 1: 
        return (<span>curtido por <Link to="/">{comments[0].name}</Link></span>)
      case 2:
        return (<span>curtido por <Link to="/">{comments[0].name}</Link> e outra <Link to="/">pessoa</Link></span>)
      default:
        return (<span>curtido por <Link to="/">{comments[0].name}</Link> e outras <Link to="/">{countLikes()-1} pessoas</Link></span>)
    }
  }

  const countLikes = () => {
    let _comments = comments ? comments : [];
    return hasLiked ? _comments.length + 1 : _comments.length;
  }


  return (
    <article className="post" data-testid="post">
      {!teaser && (
         <header className="post__header">
         <div className="user">
           <Link to={`/users/${username}`} className="user__thumb">
             <img src={avatar} alt={name} />
           </Link>
           <Link to={`/users/${username}`} className="user__name">
             {name}
           </Link>
         </div>
         <button onClick={() => toggleFolowing(!following)} className="post__context">
           <span className={"follow-btn" + (following ? " is-following" : "")}>
             {following ? "Seguindo" : "Seguir"}
           </span>
         </button>
       </header>
      )}
     
      <figure className="post__figure">
        <img src={imageUrl} alt={username} />
      </figure>
      
      {!teaser && (
        <nav className="post__controls">
          <button onClick={() => toggleLike(!hasLiked)} className="post__control">
            <span className={(hasLiked ? "fas" : "far") + " fa-heart"}></span>
          </button>
          <div className="post__status">
            <div className="user">
              
                {likedText()}
              
            </div>
          </div>
        </nav>
      )}
     

    </article>
  )
}

export default Post;