
import React from 'react';

const NewMessage = () => {
  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  }

  return (
    <div className="new-message">
      <textarea ref={newMessageElement} className="new-message__input" name="new-message" cols="30" rows="10"></textarea>
      <button className="btn new-message__btn" onClick={addMessage}>Отправить</button>
    </div>
  );
}

export default NewMessage;
