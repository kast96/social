
import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../../redux/state.js';

const NewMessage = (props) => {
  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  }

  let onPostChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <div className="new-message">
      <textarea ref={newMessageElement} className="new-message__input" name="new-message" onChange={onPostChange} value={props.newMessageText} />
      <button className="btn new-message__btn" onClick={addMessage}>Отправить</button>
    </div>
  );
}

export default NewMessage;
