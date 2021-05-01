
import Dialogs from './Dialogs.jsx';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.jsx';

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages
  }
}

let AuthContainerComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps)(AuthContainerComponent);

export default DialogsContainer;
