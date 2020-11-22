import React from 'react';
import Content from './Content/Content';
import NameBar from './Name_bar/NameBar';
import MiddleColumnProfile from './middle_column_Profile/middle_column_Profile';
import './my_profile.css';
import Preloader from '../Global_components/preloader/Preloader';




const MyProfile = (props) => {


    if(!props.profile) {
        return <Preloader />
    }
    return <div className="my_profile_css">
        
        <NameBar profile={props.profile} />
        <MiddleColumnProfile profile={props.profile} />
        <Content profile={props.profile} />

    </div>
}

export default MyProfile;