import DialogItem from './DialogsItem/DialogsItem.jsx';
import Message from './Message/Message.jsx';

const Dialogs = () => {
  return (
    <div className="dialogs">
      <div className="dialogs__items">
        <DialogItem id="1" name="Dialog 1" />
        <DialogItem id="2" name="Dialog 2" />
        <DialogItem id="3" name="Dialog 3" />
      </div>
      <div className="dialogs__messages">
        <Message message="Message 1" />
        <Message message="Message 2" />
        <Message message="Message 3" />
      </div>
    </div>
  );
}

export default Dialogs;
