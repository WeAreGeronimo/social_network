import React from 'react';
import FriendsContainer from './Friends/Friends_container';
import _css from './middle_column_Profile.module.css';
import RatingBar from './Rating/Rating';


const MiddleColumnProfile = (props) => {
   
    return <div className={_css.Profile_info}>
        <div className={_css.middle_bar}>
            <div className={_css.profile_photo}><img src="https://miro.medium.com/max/11730/0*ihTZPO4iffJ8n69_" /></div>
            <div className={_css.photo_with_me}><a href="#s">Фотографии со мной</a></div>
            <div className={_css.videos_with_me}><a href="#s">Видеозаписи со мной</a></div>
            <RatingBar lvl={88} />
            <FriendsContainer />
            

        </div>

    </div>
}

export default MiddleColumnProfile; 