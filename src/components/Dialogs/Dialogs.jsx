import DialogItem from './DialogsItem/DialogsItem.jsx';
import Message from './Message/Message.jsx';
import NewMessage from './NewMessage/NewMessage.jsx';

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((el) => <DialogItem key={el.id} id={el.id} name={el.name} />);
  let messagesElements = props.state.messages.map((el) => <Message key={el.id} message={el.message} />);

  return (
    <div className="dialogs">
      <div className="dialogs__items">
        {dialogsElements}
      </div>
      <div className="dialogs__messages">
        {messagesElements}
        <NewMessage newMessageText={props.state.newMessageText} dispatch={props.dispatch} />
      </div>
    </div>
  );
}

export default Dialogs;
