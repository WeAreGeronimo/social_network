import React from 'react';
import Content from './Content/Content';
import Name_bar from './Name_bar/Name_bar';
import MiddleColumnProfile from './middle_column_Profile/middle_column_Profile';
import './my_profile.css';



const MY_PROFILE = (props) => {
    return <div className="my_profile_css">
        <Name_bar />
       
        <MiddleColumnProfile friendData ={props.state.friendData}/>
        <Content postData={props.state.postData} addPost={props.addPost} newPostText={props.state.newPostText} updateNewPostText={props.updateNewPostText} />
        
    </div>
}

export default MY_PROFILE;