
import React from 'react';
import NewMessageReduxForm from './NewMessageForm';

const NewMessage = (props) => {
  let newMessageElement = React.createRef();

  let onAddMessage = () => {
    props.addMessage();
  }

  let onPostChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };

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
