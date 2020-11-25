import React from 'react';
import Content from './Content/Content';
import MiddleColumnProfile from './middle_column_Profile/middle_column_Profile';
import Preloader from '../Global_components/preloader/Preloader';
import YELLOW_BAR from '../Global_components/Yellow_bar/YellowBar';
import _css from './my_profile.module.css'




const MyProfile = (props) => {


    if(!props.profile) {
        return <Preloader />
    }
    return <div className={_css.my_profile_css}>
        
        <YELLOW_BAR text={props.profile.fullName} />
        <MiddleColumnProfile profile={props.profile} />
        <Content profile={props.profile} {...props} />

    </div>
}

export default MyProfile;