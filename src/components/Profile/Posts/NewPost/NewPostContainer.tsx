import NewPost from './NewPost';
import { actions } from '../../../../redux/profile-reducer';
import { connect } from 'react-redux';
import { AppStateType } from '../../../../redux/redux-store';

type MapStateToPropsType = {
  newPostText: string
}

type MapDispatchToPropsType = {
  addPost: (post: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    newPostText: state.profilePage.newPostText
  }
}

const NewPostContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {addPost: actions.addPostActionCreator})(NewPost);

export default NewPostContainer;
