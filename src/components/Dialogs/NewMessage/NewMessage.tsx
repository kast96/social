
import React from 'react';
import NewMessageReduxForm, { NewMessageFormValuesType } from './NewMessageForm';

type PropsType = {
  addMessage: (newMessage: string) => void
}

const NewMessage: React.FC<PropsType> = ({addMessage}) => {
  const addNewMessage = (formData: NewMessageFormValuesType) => {
    addMessage(formData.newMessage);
  }

  return (
    <div className="new-message">
      <NewMessageReduxForm onSubmit={addNewMessage} />
    </div>
  );
}

export default NewMessage;
