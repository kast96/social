import NewPost from './NewPost';
import {addPostActionCreator} from '../../../../redux/profile-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPost) => {
      dispatch(addPostActionCreator(newPost));
    }
  }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;
