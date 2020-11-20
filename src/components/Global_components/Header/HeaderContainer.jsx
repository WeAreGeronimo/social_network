import React from 'react';
import { connect } from 'react-redux';
import HEADER from './Header';
import {setAuth, setAuthUserData} from './../../../redux/auth_reducer'




class HeaderAPIComponent extends React.Component {

    componentDidMount() {
        this.props.setAuth()
    }

    render() {
        return <HEADER {...this.props} />
    }
}


let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

})





export default connect(mapStateToProps, {
    setAuthUserData,
    setAuth,

})(HeaderAPIComponent);


