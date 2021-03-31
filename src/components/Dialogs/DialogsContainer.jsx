
import Dialogs from './Dialogs.jsx';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages
  }
}

const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;
