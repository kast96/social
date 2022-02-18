import NewPost from './NewPost';
import { actions } from '../../../../redux/profile-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText
  }
}

const NewPostContainer = connect(mapStateToProps, {addPost: actions.addPostActionCreator})(NewPost);

export default NewPostContainer;
