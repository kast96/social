import React from 'react';
import NewPostContainer from './NewPost/NewPostContainer';
import Post from './Post/Post';

const Posts = React.memo((props) => {
  let postsElements = props.posts.map((el) => <Post key={el.id} message={el.message} />);
  return (
    <div className="posts">
      <div className="posts__new-post">
        <NewPostContainer />
      </div>
      <div className="posts__posts">
        {postsElements}
      </div>
    </div>
  );
});

export default Posts;
