
import React from 'react';

const NewPost = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className="new-post">
      <textarea ref={newPostElement} className="new-post__input" name="new-post" onChange={onPostChange} value={props.newPostText} />
      <button className="btn new-post__btn" onClick={addPost}>Отправить</button>
    </div>
  );
}

export default NewPost;
