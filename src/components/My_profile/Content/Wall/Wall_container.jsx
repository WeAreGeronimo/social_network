import React from 'react';
import { AddPost_Creater, updateNewPostText_Creater } from '../../../../redux/profile_reducer';
import StoreContext from '../../../../StoreContext';
import Wall from './Wall';



const Wall_container = () => (
    




    

    <StoreContext.Consumer> 
        {
            store => {
                let onPostChange = (text) => {
                    store.dispatch(
                        updateNewPostText_Creater(text)
                    )
                }

                let addPost = () => {
                    store.dispatch(
                        AddPost_Creater()
                    )
                }

                let postDataRq = store.getState().profilePage.postData;
                let newPostTextRq = store.getState().profilePage.newPostText;

                return <Wall updateNewPostText={onPostChange} addPost={addPost} postData={postDataRq} newPostText={newPostTextRq} />
            }
        }
    </StoreContext.Consumer>

)

export default Wall_container; 