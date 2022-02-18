
import NewMessage from './NewMessage';
import {actions} from '../../../redux/dialogs-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogsPage.newMessageText
  }
}

const NewMessageContainer = connect(mapStateToProps, {addMessage: actions.addMessage})(NewMessage);

export default NewMessageContainer;
