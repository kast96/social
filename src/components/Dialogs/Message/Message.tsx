type PropsType = {
  message: string
}

const Message: React.FC<PropsType> = ({message}) => {
  return (
    <div className="dialogs__message">{message}</div>
  );
}

export default Message;
