import React from 'react';
import Content from './Content/Content';
import Name_bar from './Name_bar/Name_bar';
import MiddleColumnProfile from './middle_column_Profile/middle_column_Profile';
import './my_profile.css';



const MY_PROFILE = (props) => {
   
    return <div className="my_profile_css">
        <Name_bar />
        
        <MiddleColumnProfile friendData ={props.store.getState().profilePage.friendData}/>
        <Content store={props.store} />
        
    </div>
}

export default MY_PROFILE;