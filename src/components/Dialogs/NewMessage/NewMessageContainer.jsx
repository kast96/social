
import React from 'react';
import NewMessage from './NewMessage.jsx';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../../redux/dialogs-reducer.js';

const NewMessageContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  }

  let onPostChange = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <NewMessage newMessageText={state.newMessageText} updateNewMessageText={onPostChange} addMessage={addMessage} />
  );
}

export default NewMessageContainer;
