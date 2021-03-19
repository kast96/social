
import React from 'react';

const NewPost = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }

  return (
    <div className="new-post">
      <textarea ref={newPostElement} className="new-post__input" name="new-post" cols="30" rows="10"></textarea>
      <button className="btn new-post__btn" onClick={addPost}>Отправить</button>
    </div>
  );
}

export default NewPost;
