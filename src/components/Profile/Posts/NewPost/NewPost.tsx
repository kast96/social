
import React from 'react';
import NewPostReduxForm, { NewPostFormValuesType } from './NewPostForm';

type PropesType = {
  addPost: (newPost: string) => void
}

const NewPost: React.FC<PropesType> = ({addPost}) => {
  const addNewPost = (formData: NewPostFormValuesType) => {
    addPost(formData.newPost);
  }

  return (
    <div className="new-post">
      <NewPostReduxForm onSubmit={addNewPost} />
    </div>
  );
}

export default NewPost;
