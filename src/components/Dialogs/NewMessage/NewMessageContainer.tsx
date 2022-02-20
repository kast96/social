
import NewMessage from './NewMessage';
import {actions} from '../../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/redux-store';

let mapStateToProps = (state: AppStateType) => {
  return {
    newMessageText: state.dialogsPage.newMessageText
  }
}

const NewMessageContainer = connect(mapStateToProps, {addMessage: actions.addMessage})(NewMessage);

export default NewMessageContainer;
