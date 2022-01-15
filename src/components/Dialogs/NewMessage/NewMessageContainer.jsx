
import NewMessage from './NewMessage';
import {addMessageActionCreator} from '../../../redux/dialogs-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogsPage.newMessageText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (newMessage) => {
      dispatch(addMessageActionCreator(newMessage));
    }
  }
}

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage);

export default NewMessageContainer;
