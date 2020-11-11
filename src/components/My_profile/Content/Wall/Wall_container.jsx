import React from 'react';
import { connect } from 'react-redux';
import { AddPost_Creater, updateNewPostText_Creater } from '../../../../redux/profile_reducer';
import Wall from './Wall';



    




    

    // <StoreContext.Consumer> 
    //     {
    //         store => {
    //             let onPostChange = (text) => {
    //                 store.dispatch(
    //                     updateNewPostText_Creater(text)
    //                 )
    //             }

    //             let addPost = () => {
    //                 store.dispatch(
    //                     AddPost_Creater()
    //                 )
    //             }

    //             let postDataRq = store.getState().profilePage.postData;
    //             let newPostTextRq = store.getState().profilePage.newPostText;

    //             return <Wall updateNewPostText={onPostChange} addPost={addPost} postData={postDataRq} newPostText={newPostTextRq} />
    //         }
    //     }
    // </StoreContext.Consumer>



let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostText_Creater(text))
        },
        addPost: () => {
            dispatch(AddPost_Creater())
        }
    }
}


const Wall_container = connect(mapStateToProps, mapDispatchToProps)(Wall);

export default Wall_container; 