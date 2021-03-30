import NewPostContainer from './NewPost/NewPostContainer.jsx';
import Post from './Post/Post.jsx';

const Posts = (props) => {
  let state = props.store.getState().profilePage;
  let postsElements = state.posts.map((el) => <Post key={el.id} message={el.message} />);

  return (
    <div className="posts">
      <div className="posts__new-post">
        <NewPostContainer store={props.store} />
      </div>
      <div className="posts__posts">
        {postsElements}
      </div>
    </div>
  );
}

export default Posts;
