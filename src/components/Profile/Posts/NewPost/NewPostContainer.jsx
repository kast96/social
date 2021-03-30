import NewPost from './NewPost.jsx';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../redux/profile-reducer.js';

const NewPostContainer = (props) => {
  let state = props.store.getState().profilePage;

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <NewPost newPostText={state.newPostText} updateNewPostText={onPostChange} addPost={addPost} />
  );
}

export default NewPostContainer;
