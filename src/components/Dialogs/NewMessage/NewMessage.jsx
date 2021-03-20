
import React from 'react';

const NewMessage = (props) => {
  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  }

  let onPostChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className="new-message">
      <textarea ref={newMessageElement} className="new-message__input" name="new-message" onChange={onPostChange} value={props.newMessageText} />
      <button className="btn new-message__btn" onClick={addMessage}>Отправить</button>
    </div>
  );
}

export default NewMessage;
