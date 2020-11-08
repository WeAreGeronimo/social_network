import React from 'react';
import { AddPost_Creater, updateNewPostText_Creater } from '../../../../redux/profile_reducer';
import Wall from './Wall';



const Wall_container = (props) => {
    
    let onPostChange = (text) => {
        props.store.dispatch(
            updateNewPostText_Creater(text)
        )

    }

    let addPost = () => {

        props.store.dispatch(
            AddPost_Creater()
        )

    }

    let postDataRq = props.store.getState().profilePage.postData;
    let newPostTextRq = props.store.getState().profilePage.newPostText;



    return (<Wall updateNewPostText={onPostChange} addPost={addPost} postData={postDataRq} newPostText={newPostTextRq}/>)

}

export default Wall_container; 