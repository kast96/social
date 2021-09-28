
import React from 'react';
import NewPostForm from './NewPostForm';

const NewPost = (props) => {
  const addNewPost = (formData) => {
    props.addPost(formData.newPost);
  }

  return (
    <div className="new-post">
      <NewPostForm onSubmit={addNewPost} />
    </div>
  );
}

export default NewPost;
