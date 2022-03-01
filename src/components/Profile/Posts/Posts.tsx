import React from 'react';
import { PostType } from '../../../types/types';
import NewPostContainer from './NewPost/NewPostContainer';
import Post from './Post/Post';

type PropsType = {
  posts: Array<PostType>
}

const Posts: React.FC<PropsType> = React.memo(({posts}) => {
  let postsElements = posts.map((el) => <Post key={el.id} message={el.message} />);
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
