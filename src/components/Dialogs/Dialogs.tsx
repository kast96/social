import { DialogType, MessageType } from '../../redux/dialogs-reducer';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import NewMessageContainer from './NewMessage/NewMessageContainer';

type PropsType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
}

const Dialogs: React.FC<PropsType> = ({dialogs, messages}) => {
  let dialogsElements = dialogs.map((el) => <DialogItem key={el.id} id={el.id} name={el.name} />);
  let messagesElements = messages.map((el) => <Message key={el.id} message={el.message} />);

  return (
    <div className="dialogs">
      <div className="dialogs__items">
        {dialogsElements}
      </div>
      <div className="dialogs__messages">
        {messagesElements}
        <NewMessageContainer />
      </div>
    </div>
  );
}

export default Dialogs;
