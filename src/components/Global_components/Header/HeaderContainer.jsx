import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import HEADER from './Header';
import {setAuthUserData} from './../../../redux/auth_reducer'



class HeaderAPIComponent extends React.Component {


    componentDidMount() {
        // this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if(response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                this.props.setAuthUserData(id, email, login);
            }
          })
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

})(HeaderAPIComponent);


