
import Posts from './Posts';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/redux-store';
import { PostType } from '../../../types/types';

type MapStateToPropsType = {
  posts: Array<PostType>
}

type MapDispatchToPropsType = {
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    posts: state.profilePage.posts
  }
}

const PostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps)(Posts);

export default PostsContainer;
