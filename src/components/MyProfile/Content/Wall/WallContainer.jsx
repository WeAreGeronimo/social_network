import { connect } from 'react-redux';
import { addPost } from '../../../../redux/profile_reducer';
import Wall from './Wall';

const mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
  };
};

const WallContainer = connect(mapStateToProps, { addPost })(Wall);

export default WallContainer;
