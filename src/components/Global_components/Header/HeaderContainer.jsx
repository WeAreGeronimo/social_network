import React from 'react';
import { connect } from 'react-redux';
import HEADER from './Header';
import { logOut } from '../../../redux/auth_reducer';

class HeaderAPIComponent extends React.Component {
  render() {
    return <HEADER {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { logOut })(
  HeaderAPIComponent,
);
