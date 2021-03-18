import NewPost from './NewPost/NewPost.jsx';
import Post from './Post/Post.jsx';

const Posts = (props) => {
  let postsElements = props.posts.map((el) => <Post key={el.id} message={el.message} />);

  return (
    <div className="posts">
      <div className="posts__new-post">
        <NewPost />
      </div>
      <div className="posts__posts">
        {postsElements}
      </div>
    </div>
  );
}

export default Posts;
