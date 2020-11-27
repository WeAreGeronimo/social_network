import React from 'react';
import { connect } from 'react-redux';
import HEADER from './Header';
import {log_out} from './../../../redux/auth_reducer'




class HeaderAPIComponent extends React.Component {


    render() {
        return <HEADER {...this.props} />
    }
}


let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

})





export default connect(mapStateToProps, {log_out

})(HeaderAPIComponent);


