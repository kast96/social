
import React from 'react';
import NewMessageReduxForm from './NewMessageForm';

const NewMessage = (props) => {
  const addNewMessage = (formData) => {
    props.addMessage(formData.newMessage);
  }

  return (
    <div className="new-message">
      <NewMessageReduxForm onSubmit={addNewMessage} />
    </div>
  );
}

export default NewMessage;
