
import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../redux/profile-reducer.js';

const NewPost = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <div className="new-post">
      <textarea ref={newPostElement} className="new-post__input" name="new-post" onChange={onPostChange} value={props.newPostText} />
      <button className="btn new-post__btn" onClick={addPost}>Отправить</button>
    </div>
  );
}

export default NewPost;
