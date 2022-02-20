
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { AppStateType } from '../../redux/redux-store';

let mapStateToProps = (state: AppStateType) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages
  }
}

export default compose(
  connect(mapStateToProps),
  withAuthRedirect
)(Dialogs);
