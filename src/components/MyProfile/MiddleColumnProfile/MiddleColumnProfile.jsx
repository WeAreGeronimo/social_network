import React from 'react';
import FriendsContainer from './Friends/FriendsContainer';
import _css from './MiddleColumnProfile.module.css';
import RatingBar from './Rating/Rating';

const MiddleColumnProfile = (props) => {
  return (
    <div className={_css.Profile_info}>
      <div className={_css.middle_bar}>
        <div className={_css.profile_photo}>
          <img
            src={
              props.profile.photos.large
                ? props.profile.photos.large
                : 'https://vk.com/images/dquestion_app_widget_2_c.png'
            }
          />
        </div>
        <div className={_css.photo_with_me}>
          <a href="#s">Фотографии со мной</a>
        </div>
        <div className={_css.videos_with_me}>
          <a href="#s">Видеозаписи со мной</a>
        </div>
        <RatingBar lvl={88} />
        <FriendsContainer />
      </div>
    </div>
  );
};

export default MiddleColumnProfile;
