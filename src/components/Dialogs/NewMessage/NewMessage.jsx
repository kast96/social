
import React from 'react';
import NewMessageForm from './NewMessageForm';

const NewMessage = (props) => {
  const addNewMessage = (formData) => {
    props.addMessage(formData.newMessage);
  }

  return (
    <div className="new-message">
      <NewMessageForm onSubmit={addNewMessage} />
    </div>
  );
}

export default NewMessage;
