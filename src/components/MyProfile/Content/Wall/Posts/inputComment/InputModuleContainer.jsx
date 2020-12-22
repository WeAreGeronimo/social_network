import { connect } from 'react-redux';
import InputModule from './InputModule';
import { PutCommentInApi } from '../../../../../../redux/profile_reducer';

const mapStateToProps = (state, props) => {
  return {
    postId: props.postId,
    AuthUserId: state.auth.userId,
  };
};

const InputModuleContainer = connect(mapStateToProps, {
  PutCommentInApi,
})(InputModule);

export default InputModuleContainer;
