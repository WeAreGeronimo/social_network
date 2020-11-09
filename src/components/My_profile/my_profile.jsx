import React from 'react';
import Content from './Content/Content';
import Name_bar from './Name_bar/Name_bar';
import MiddleColumnProfile from './middle_column_Profile/middle_column_Profile';
import './my_profile.css';
import StoreContext from '../../StoreContext';



const MY_PROFILE = (props) => {

    return <div className="my_profile_css">
        <Name_bar />
        <StoreContext.Consumer>
            {
                (store) => (
                    <MiddleColumnProfile friendData={store.getState().profilePage.friendData} />

                )
            }
        </StoreContext.Consumer>
        <Content />

    </div>
}

export default MY_PROFILE;