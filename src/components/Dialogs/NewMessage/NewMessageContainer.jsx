
import NewMessage from './NewMessage.jsx';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../../redux/dialogs-reducer.js';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogsPage.newMessageText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
    addMessage: () => {
      dispatch(addMessageActionCreator());
    }
  }
}

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage);

export default NewMessageContainer;
