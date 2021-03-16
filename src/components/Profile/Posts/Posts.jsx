import NewPost from './NewPost/NewPost.jsx';
import Post from './Post/Post.jsx';

const Posts = () => {
  return (
    <div className="posts">
      <div className="posts__new-post">
        <NewPost />
      </div>
      <div className="posts__posts">
        <Post message="post 1" />
        <Post message="post 2" />
      </div>
    </div>
  );
}

export default Posts;
