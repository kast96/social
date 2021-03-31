
import Posts from './Posts.jsx';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts
  }
}

const PostsContainer = connect(mapStateToProps)(Posts);

export default PostsContainer;
