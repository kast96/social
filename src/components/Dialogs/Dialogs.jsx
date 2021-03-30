import DialogItem from './DialogsItem/DialogsItem.jsx';
import Message from './Message/Message.jsx';
import NewMessageContainer from './NewMessage/NewMessageContainer.jsx';

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;
  let dialogsElements = state.dialogs.map((el) => <DialogItem key={el.id} id={el.id} name={el.name} />);
  let messagesElements = state.messages.map((el) => <Message key={el.id} message={el.message} />);

  return (
    <div className="dialogs">
      <div className="dialogs__items">
        {dialogsElements}
      </div>
      <div className="dialogs__messages">
        {messagesElements}
        <NewMessageContainer store={props.store} />
      </div>
    </div>
  );
}

export default Dialogs;
