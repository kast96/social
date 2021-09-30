
import React from 'react';
import NewPostReduxForm from './NewPostForm';

const NewPost = (props) => {
  const addNewPost = (formData) => {
    props.addPost(formData.newPost);
  }

  return (
    <div className="new-post">
      <NewPostReduxForm onSubmit={addNewPost} />
    </div>
  );
}

export default NewPost;
